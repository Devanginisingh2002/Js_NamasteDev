import { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox as WishCheckbox } from 'coco';

/* Types */
import type { NotificationPreferencesType } from '@type/SettingsTypes';

/* Selectors */
import { getUpdatedResponse, getSMSBlocked ,getMarketingSmsBlocked } from '@selectors/SettingsSelectors';

/* Actions */
import { updateNotificationSettings } from '@actions/SettingsActions';
import { updateSMSNotificationSettings } from '@actions/SettingsActions';

/* Styled Components */
import {
  TableRow,
  NotificationCell,
  NotificationStatus,
  NotificationItemTitle,
  NotificationItemText,
  WishDotLoaderStyled,
} from '@shared/styles/settings/Notifications';

/* Constants */
import {
  SETTINGS_FIELD_INDEX,
  SETTINGS_NOTIFICATION_TYPE,
  ORDER_NOTIFICATION_ID,
  HIDE_CHECKBOX_ID,
} from '@constants/SettingsConstants';

/* Analytics */
import { logSettingsClickEvents } from '@utils/logger/AnalyticsUtil';

const mapStateToProps = (state: FullStateType) => ({
  updatedResponse: getUpdatedResponse(state),
  smsBlocked: getSMSBlocked(state), 
  MarketingSmsStatus: getMarketingSmsBlocked(state),
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  updateNotificationSettings: (
    item: NotificationPreferencesType,
    index: number,
  ) => {
    dispatch(updateNotificationSettings(item, index));
  },
  updateSMSNotificationSettings: (updateParam:any) => {
    dispatch(
      updateSMSNotificationSettings(
        updateParam,
        SETTINGS_FIELD_INDEX.SMS_NOTIFICATION,
      ),
    );
  },
});

type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    item: NotificationPreferencesType;
    rowIndex: number;
    isLastItem?: boolean;
    padding?: string;
    check?: any;
  };
type StateType = {
  isLoading: boolean;
};

class NotificationSettingsRow extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { isLoading: false };
  }

  componentDidUpdate() {
    const newValue = this.props.updatedResponse[this.props.rowIndex].isLoading;
    if (newValue !== this.state.isLoading) {
      setTimeout(
        () => this.setState({ isLoading: newValue }),
        newValue ? 0 : 1000,
      );
    }
  }

  onCheck = (isChecked: boolean, dataId: number | null | undefined) => {
    const { item, rowIndex, check } = this.props;
  

    if (dataId === null || dataId === undefined) {
      return;
    }
   
    const first = check[1].value;
    console.log("checking main: ", item, "propssss", this.props, first, "firsttt");
    

    if (rowIndex === 0 && dataId === SETTINGS_NOTIFICATION_TYPE.SMS) {
    //   // ** Wishh" is unchecked, uncheck all SMS checkboxes**
      if (isChecked) {
        check[1].value[2] = true;
        check[2].value[2] = true;
      } else{
        check[1].value[2] = false;
        check[2].value[2] = false;
      }
    }

    if (rowIndex === 1 && isChecked) {
      // **If "Deals & Sales" is checked, check "Rewards & Promotions" and disable "Deals & Sales"** 
      this.props.updateSMSNotificationSettings({
        setting_value: true,
        for_marketing_type: true,
      });

      // **Mark "Rewards & Promotions" as checked**
      item.value[2] = true; // Assuming "Rewards & Promotions" ID is 4

      // **Disable "Deals & Sales"**
      (item as any).disabled = true;
    }

    item.value[dataId] = isChecked;
    this.props.updateNotificationSettings(item, rowIndex);
    logSettingsClickEvents(SETTINGS_FIELD_INDEX.NOTIFICATION);
  };

  render() {
    const { item, isLastItem = false, padding, check } = this.props;
    console.log(this.props, "checkkkkk");

    return (
      <TableRow key={item.idx} isLastItem={isLastItem} padding={padding}>
        <NotificationCell grow>
          <NotificationItemTitle>{item.name}</NotificationItemTitle>
          <NotificationItemText>{item.description}</NotificationItemText>
        </NotificationCell>
        <NotificationStatus isLoading={this.state.isLoading}>
          <WishDotLoaderStyled left />
        </NotificationStatus>
        <NotificationCell margin center>
          <WishCheckbox
            large
            dataID={SETTINGS_NOTIFICATION_TYPE.EMAIL}
            onCheck={this.onCheck}
            isDisabled={item.idx === ORDER_NOTIFICATION_ID}
            isChecked={item?.value?.[SETTINGS_NOTIFICATION_TYPE.EMAIL]}
          />
        </NotificationCell>
        <NotificationCell margin center>
          <WishCheckbox
            large
            dataID={SETTINGS_NOTIFICATION_TYPE.APP}
            onCheck={this.onCheck}
            isChecked={item?.value?.[SETTINGS_NOTIFICATION_TYPE.APP]}
          />
        </NotificationCell>
        {!HIDE_CHECKBOX_ID.includes(item.idx) ? (
          <NotificationCell margin center>
            <WishCheckbox
              large
              dataID={SETTINGS_NOTIFICATION_TYPE.SMS}
              onCheck={this.onCheck}
              isChecked={item?.value?.[SETTINGS_NOTIFICATION_TYPE.SMS]}
             isDisabled={Boolean(this.props.smsBlocked) || (item as any).disabled}// Disabling Deals & Sales
          
            />
          </NotificationCell>
        ) : (
          <NotificationCell margin center>
            <div style={{ width: '20px' }}></div>
          </NotificationCell>
        )}
      </TableRow>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationSettingsRow);