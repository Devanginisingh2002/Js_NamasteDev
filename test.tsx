  onCheck = (isChecked: boolean, dataId: number | null | undefined) => {
    const { item, rowIndex } = this.props;
    if (dataId === null || dataId === undefined) {
      return;
    }

    console.log("🛠 Current item.value state: ", item.value);

    /** ✅ "Wish Updates" Logic */
    if (rowIndex === 0 && dataId === SETTINGS_NOTIFICATION_TYPE.SMS) {
      const updatedValues = { ...item.value };

      Object.keys(updatedValues).forEach((key) => {
        const numericKey = Number(key);
        if (numericKey !== SETTINGS_NOTIFICATION_TYPE.EMAIL && numericKey !== SETTINGS_NOTIFICATION_TYPE.APP) {
          updatedValues[numericKey] = isChecked; // ✅ SMS checkboxes follow "Wish Updates"
        }
      });

      console.log("✅ Updated item.value:", updatedValues);

      this.props.updateNotificationSettings({ ...item, value: updatedValues }, rowIndex);
      return;
    }

    /** ✅ "Deals & Sales" Logic */
    if (rowIndex === 1 && isChecked) {
      this.props.updateSMSNotificationSettings({
        setting_value: true,
        for_marketing_type: true,
      });

      item.value[4] = true; // ✅ "Rewards & Promotions" checked
    }

    item.value[dataId] = isChecked;
    this.props.updateNotificationSettings(item, rowIndex);
    logSettingsClickEvents(SETTINGS_FIELD_INDEX.NOTIFICATION);
  };