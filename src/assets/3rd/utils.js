"use strict";
/*
*
*  need: ActiveX Support & Safe Mode Allowed
*
* */
var HardwareConf = (function() {
  var HardwareConf = function() {
    return new HardwareConf.fn.init();
  };

  HardwareConf.fn = HardwareConf.prototype = {
    constructor: HardwareConf,
    init: function() {
      var _this = this;
      _this.locator = undefined;
      _this.service = undefined;
      _this.conf = {};
    },
    checkActiveX: function() {
      var _this = this;
      if(window.ActiveXObject) {
        _this.locator = new ActiveXObject("WbemScripting.SWbemLocator");
        _this.service = _this.locator.ConnectServer(".");
      } else {
        alert("Window ActiveXObject is Not Defined")
      }
    },
    getHardwareInfoByQuery: function(query) {
      var _this = this;
      if(typeof query !== "string" || query === "") {
        return null;
      }

      _this.checkActiveX();
      if(_this.service === undefined) {
        return null;
      }
      /*
      *  硬件检测对应 query
      *
      *  CPU          Win32_Processor
      *  BIOS         Win32_BIOS
      *  Ram          Win32_ComputerSystem  &  Win32_PhysicalMemory
      *  主板           Win32_BaseBoard
      *  光驱           Win32_CDROMDrive
      *  硬盘           Win32_DiskDrive
      *  键盘           Win32_Keyboard
      *  鼠标           Win32_PointingDevice
      *  网络           Win32_OperatingSystem
      *  服务           Win32_Service
      *  并口           Win32_ParallelPort
      *  串口           Win32_SerialPort
      *  显卡           Win32_VideoController
      *  多媒体           Win32_SoundDevice
      *  打印机           Win32_Printer
      *  显示器           Win32_DesktopMonitor
      *  USB              Win32_USBController
      *  用户帐号信息       Win32_UserAccount
      *  系统组帐号         Win32_GroupUser
      *  系统管理组         Win32_Group
      *
      * */
      var e = new Enumerator (_this.service.ExecQuery("SELECT * FROM " + query));
      _this.conf[query] = e;
      return e;
    },
    getVideoCardConf: function() {
      var _this = this;
      var e = _this.getHardwareInfoByQuery("Win32_VideoController");
      if(e == null) {
        return null;
      }
      var info = {};
      for(;!e.atEnd();e.moveNext ()) {
        var p = e.item ();
        info.Caption = p.Caption ;
        info.CreationClassName = p.CreationClassName ;
        info.Description= p.Description ;
        info.DeviceID= p.DeviceID ;
        info.DriverVersion= p.DriverVersion;
        info.InstalledDisplayDrivers= p.InstalledDisplayDrivers;
        info.VideoModeDescription= p.VideoModeDescription;
        info.Name= p.Name;
        info.VideoProcessor= p.VideoProcessor;
        info.AdapterCompatibility= p.AdapterCompatibility;
        info.Status= p.Status;
        info.SystemName= p.SystemName;
      }
      return info;
    },
    getUserAgentInfo: function() {
      var _this = this;

      var agent = navigator.userAgent.toLowerCase();

      var browserData = {
        version: "",
        bits: ""
      };


      if(navigator.appVersion.indexOf("x64") > 0) {
        browserData.bits = "x64";
      } else if(navigator.appVersion.indexOf("x86") > 0) {
        browserData.bits = "x86";
      }

      var regStr_ie = /msie [\d.]+;/gi ;
      var regStr_ff = /firefox\/[\d.]+/gi
      var regStr_chrome = /chrome\/[\d.]+/gi ;
      var regStr_saf = /safari\/[\d.]+/gi ;


      //IE
      if(agent.indexOf("msie") > 0) {
        browserData.version = agent.match(regStr_ie);
      }

      //firefox
      if(agent.indexOf("firefox") > 0) {
        browserData.version = agent.match(regStr_ff) + "";
        browserData.version = browserData.version.replace("firefox", "Firefox");
      }

      //Chrome
      if(agent.indexOf("chrome") > 0) {
        browserData.version = agent.match(regStr_chrome) + "";
        browserData.version = browserData.version.replace("chrome", "Chrome");

      }

      //Safari
      if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        browserData.version = agent.match(regStr_saf) + "";
        browserData.version = browserData.version.replace("safari", "Safari");
      }

      browserData.version = (browserData.version + "").replace("/", " ").replace(";", "");

      return browserData;
    }
  };

  HardwareConf.fn.init.prototype = HardwareConf.fn;

  return HardwareConf;
})();
