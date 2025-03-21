onCheck = (isChecked: boolean, dataId: number | null | undefined) => {
  const { item, rowIndex, check } = this.props;
  if (dataId === null || dataId === undefined) {
      return;
  }

  console.log("✅ Before Update:", { rowIndex, dataId, itemValue: { ...item.value } });

  // ✅ 'Wish Updates' check/uncheck → Baaki SMS checkboxes bhi update honge
  if (rowIndex === 0 && dataId === SETTINGS_NOTIFICATION_TYPE.SMS) {
      check[1].value[2] = isChecked;
      check[2].value[2] = isChecked;
  }

  // ✅ 'Deals & Sales' check hone pe 'Rewards & Promotions' check hoga + 'Deals & Sales' disable hoga
  if (rowIndex === 1 && dataId === SETTINGS_NOTIFICATION_TYPE.SMS && isChecked) {
      check[2].value[2] = true; // Rewards & Promotions ko check karo
      (item as any).disabled = true; // Deals & Sales disable karo
      this.setState({}); // UI update ke liye force re-render
  }

  // ✅ API Call aur Redux Update
  const updatePara = {
      setting_value: isChecked,
      [rowIndex === 0 ? "for_wish_updates" : "for_marketing_type"]: true,
  };

  console.log("🛠 API Call:", updatePara);
  
  this.props.updateSMSNotificationSettings(updatePara).then(() => {
      console.log("✅ API Response: Redux State Updated!");
      this.setState({}); // UI refresh karega
  }
);

  // ✅ Redux state update karo
  item.value[dataId] = isChecked;
  this.props.updateNotificationSettings(item, rowIndex);
  logSettingsClickEvents(SETTINGS_FIELD_INDEX.NOTIFICATION);

  console.log("✅ After Update:", { rowIndex, itemValue: { ...item.value } });
};