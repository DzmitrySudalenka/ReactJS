import React from "react";
import {changeOnlyView} from "../../store/actions";
import {connect} from "react-redux";
import Checkbox from "../../components/UI/Checkbox";
import "./Settings.css";

const Settings = (props) => {
  return (
    <div className="settings-page">
      <h2 className="settings-page-title">Settings</h2>
      <div className="settings-page-cont">
        <label className="settings-page-control">
          <Checkbox
            className="settings-page-control-checkbox-view"
            checked={props.onlyView}
            onChange={props.changeOnlyView}
          />
          <span className="settings-page-control-text">Только просмотр</span>
        </label>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    onlyView: state.cards.onlyView
  };
}

const mapDispatchToProps = {
  changeOnlyView
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
