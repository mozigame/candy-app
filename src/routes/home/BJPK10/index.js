import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs, Button, Carousel, Input, Modal, Table, Icon, message } from 'antd';
import Draggable, { DraggableCore } from 'react-draggable';
import HeadMenu from '../../../components/headMenu';
import BJPK10TOP from '../../../components/BJPK10Top';
import styles from './index.less';
import '../../../iconfont/iconfont.css';

const { TabPane } = Tabs;

class BJPK10 extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      totalList: [
        {
          title: '冠军',
          type: 'Z1',
          rate: 2,
          total: [
            {
              id: 'Z10',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z11',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z12',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z13',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z14',
              displayName: '龙',
              value: '龙',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z15',
              displayName: '虎',
              value: '虎',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '亚军',
          type: 'Z2',
          rate: 2,
          total: [
            {
              id: 'Z20',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z21',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z22',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z23',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z24',
              displayName: '龙',
              value: '龙',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z25',
              displayName: '虎',
              value: '虎',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第3名',
          type: 'Z3',
          rate: 2,
          total: [
            {
              id: 'Z30',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z31',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z32',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z33',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z34',
              displayName: '龙',
              value: '龙',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z35',
              displayName: '虎',
              value: '虎',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第4名',
          type: 'Z4',
          rate: 2,
          total: [
            {
              id: 'Z40',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z41',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z42',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z43',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z44',
              displayName: '龙',
              value: '龙',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z45',
              displayName: '虎',
              value: '虎',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第5名',
          type: 'Z5',
          rate: 2,
          total: [
            {
              id: 'Z50',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z51',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z52',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z53',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z54',
              displayName: '龙',
              value: '龙',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z55',
              displayName: '虎',
              value: '虎',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第6名',
          type: 'Z6',
          rate: 2,
          total: [
            {
              id: 'Z60',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z61',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z62',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z63',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第7名',
          type: 'Z7',
          rate: 2,
          total: [
            {
              id: 'Z70',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z71',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z72',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z73',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第8名',
          type: 'Z8',
          total: [
            {
              id: 'Z80',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z81',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z82',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z83',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第9名',
          type: 'Z9',
          total: [
            {
              id: 'Z90',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z91',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z92',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z93',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }],
        },
        {
          title: '第10名',
          type: 'Z10',
          total: [
            {
              id: 'Z100',
              displayName: '大',
              value: '大',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z101',
              displayName: '小',
              value: '小',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z102',
              displayName: '单',
              value: '单',
              rate: '1.985',
              checked: false,
            }, {
              id: 'Z103',
              displayName: '双',
              value: '双',
              rate: '1.985',
              checked: false,
            }],
        },
      ],
      pkList: [
        {
          title: '冠军',
          type: 'S1',
          rate: 2,
          total: [
            {
              id: 'S10',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S11',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S12',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S13',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S14',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S15',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S16',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S17',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S18',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S19',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '亚军',
          type: 'S2',
          rate: 2,
          total: [
            {
              id: 'S20',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S21',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S22',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S23',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S24',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S25',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S26',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S27',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S28',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S29',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第3名',
          type: 'S3',
          rate: 2,
          total: [
            {
              id: 'S30',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S31',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S32',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S33',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S34',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S35',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S36',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S37',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S38',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S39',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第4名',
          type: 'S4',
          rate: 2,
          total: [
            {
              id: 'S40',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S41',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S42',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S43',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S44',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S45',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S46',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S47',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S48',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S49',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第5名',
          type: 'S5',
          rate: 2,
          total: [
            {
              id: 'S50',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S51',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S52',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S53',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S54',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S55',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S56',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S57',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S58',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S59',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第6名',
          type: 'S6',
          rate: 2,
          total: [
            {
              id: 'S60',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S61',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S62',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S63',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S64',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S65',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S66',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S67',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S68',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S69',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第7名',
          type: 'S7',
          rate: 2,
          total: [
            {
              id: 'S70',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S71',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S72',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S73',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S74',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S75',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S76',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S77',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S78',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S79',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第8名',
          type: 'S8',
          rate: 2,
          total: [
            {
              id: 'S80',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S81',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S82',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S83',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S84',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S85',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S86',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S87',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S88',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S89',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第9名',
          type: 'S9',
          rate: 2,
          total: [
            {
              id: 'S90',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S91',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S92',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S93',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S94',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S95',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S96',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S97',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S98',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S99',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
        {
          title: '第10名',
          type: 'S10',
          rate: 2,
          total: [
            {
              id: 'S100',
              displayName: '1号',
              value: '1',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S101',
              displayName: '2号',
              value: '2',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S102',
              displayName: '3号',
              value: '3',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S103',
              displayName: '4号',
              value: '4',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S104',
              displayName: '5号',
              value: '5',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S105',
              displayName: '6号',
              value: '6',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S106',
              displayName: '7号',
              value: '7',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S107',
              displayName: '8号',
              value: '8',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S108',
              displayName: '9号',
              value: '9',
              rate: '9.8',
              checked: false,
            }, {
              id: 'S109',
              displayName: '10号',
              value: '10',
              rate: '9.8',
              checked: false,
            },
          ],
        },
      ],
      showTime: '00:00',
      visible: false,
      maxRate: 0,
      tab: 'Z',
    };
  }
  componentDidMount() {
    const self = this;
    this.props.getOpenList();
    let ctrl = this.props.home.timerCtrl;
    if (ctrl) {
      ctrl = false;
      self.props.updateCtrl(ctrl);
      this.props.getOpenList(doNext);

      function doNext(data) {
        data.forEach((i) => {
          i.overTime = (i.nextStopTime - new Date().getTime()) / 1000;
          let minute = `${Math.floor(i.overTime / 60)}`;
          if (minute.length === 1) {
            minute = `0${minute}`;
          }
          let sec = `${Math.floor(i.overTime % 60)}`;
          if (sec.length === 1) {
            sec = `0${sec}`;
          }
          i.showTime = `${minute}:${sec}`;
          if (i.overTime < 0) {
            i.showTime = '已结束';
          }
        });
        self.props.updateContent(data);
        clearInterval(timer);
        let flag = true;
        let timer = setInterval(() => {
          data.forEach((i) => {
            i.overTime -= 1;
            let minute = `${Math.floor(i.overTime / 60)}`;
            if (minute.length === 1) {
              minute = `0${minute}`;
            }
            let sec = `${Math.floor(i.overTime % 60)}`;
            if (sec.length === 1) {
              sec = `0${sec}`;
            }
            i.showTime = `${minute}:${sec}`;
            if (i.overTime < 0) {
              i.showTime = '已结束';
            }
          });
          self.props.updateContent(data);
          if (flag) {
            flag = false;
            setTimeout(() => {
              self.props.getOpenList(doNext);
              setTimeout(() => {
                clearInterval(timer);
              }, 1000);
            }, 30000);
          }
        }, 1000);
      }
    }
    this.props.getRate({
      data: {
        type: 'BJPK10',
      },
      cb(data) {
        const state = self.state;
        for (const i in data) {
          addRate(state.totalList, i, data[i]);
          addRate(state.pkList, i, data[i]);
        }
        self.setState({
          state,
        });
      },
    });
    function addRate(arr, name, value) {
      arr.forEach((item) => {
        if (item.type === name) {
          item.rate = value;
        }
      });
    }
    this.props.updateTypeNow('两面盘');
  }
  changeShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  clearBuyList() {
    this.props.updateBuyList({
      category: 'BJPK10',
      serialCode: '',
      times: 0,
      count: 0,
      amount: 0,
      numberType: '',
      numbers: '',
    });
  }
  // 获取buyList
  getBuyList() {
    const self = this;
    this.props.getBuyList({
      data: {
        category: 'BJPK10',
        serialCode: this.props.trend.headInfo.latestSerialCode,
        numberType: this.state.tab,
      },
      cb(buyList) {
        self.props.updateBuyList(buyList);
        self.setState({
          visible: true,
        });
      },
    });
  }
  chooseTab(index) {
    const self = this;
    let tab = 'Z';
    switch (index) {
      case '0':
        tab = 'Z';
        break;
      case '1':
        tab = 'S';
        break;
      default:
        break;
    }
    self.setState({
      tab,
    });
  }
  // 改变状态
  changeChecked(list, ev) {
    const {
      BJPK10,
    } = this.props.home;
    const {
      totalList,
      pkList,
    } = this.state;
    let tempArr = [];
    if (BJPK10.length && BJPK10[0].type.split('')[0] !== ev.target.id.split('')[0]) {
      this.clear.call(this, totalList);
      this.clear.call(this, pkList);
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].title === ev.target.value) {
        tempArr = list[i].total;
        break;
      }
    }
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].id === ev.target.id) {
        tempArr[i].checked = !tempArr[i].checked;
      }
    }
    setTimeout(() => {
      this.setState(
        list,
      );
    }, 20);
    this.staticCount.call(this);
  }
  // 统计
  staticCount() {
    const {
      totalList,
      pkList,
    } = this.state;
    const tempList = [];
    let count = 0;
    const selArr = [];
    calcCount(totalList);
    calcCount(pkList);
    this.props.clearBJPK10();
    function calcCount(list) {
      list.forEach((i) => {
        i.total.forEach((item) => {
          if (item.checked) {
            let id = '';
            if (item.id.length === 4) {
              id = 10;
            } else {
              id = item.id.split('')[1];
            }
            selArr.push({
              id,
              type: item.id.split('')[0],
              value: item.value,
              rate: i.rate,
            });
            tempList.push({
              index: count,
              type: i.type,
              code: item.value,
            });
            count += 1;
          }
        });
      });
    }
    let totalRate = 0;
    let code = '';
    let nowId = '0';
    let numberType = '';
    selArr.forEach((item) => {
      totalRate += item.rate;
      if (nowId === item.id) {
        code += `|${item.value}`;
      } else {
        code += `,${item.id}:${item.value}`;
        nowId = item.id;
      }
      numberType = item.type;
    });
    code = code.substr(1, code.length - 1);
    const maxRate = totalRate * this.props.home.rate;
    this.setState({
      maxRate,
    });
    const buyList = {
      category: 'BJPK10',
      numbers: code,
      numberType,
      count: tempList.length,
      times: this.props.home.rate,
      serialCode: this.props.trend.headInfo.nextSerialCode,
      amount: this.props.home.rate * tempList.length * 2,
    };
    this.props.updateBuyList(buyList);
    this.props.updateBJPK10(tempList);
  }
  // 更改倍数
  calcRate(e) {
    const rate = +e.target.value;
    if (isNaN(rate)) {
      return false;
    }
    this.props.updateRate(rate);
    setTimeout(() => {
      this.staticCount.call(this);
    }, 20);
  }
  changeRate(flag) {
    let rate = this.props.home.rate;
    rate += +flag;
    rate = rate <= 0 ? 1 : rate;
    this.props.updateRate(rate);
    setTimeout(() => {
      this.staticCount.call(this);
    }, 20);
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk(BJPK10, times, serialCode) {
    const self = this;
    const payload = {
      data: this.props.home.buyList,
      cb() {
        message.success('购买成功');
        self.setState({
          visible: false,
          maxRate: 0,
        });
        BJPK10 = [];
        self.props.updateBuyList({
          category: 'BJPK10',
          serialCode: '',
          times: 0,
          count: 0,
          amount: 0,
          numberType: '',
          numbers: '',
        });
        self.props.updateBJPK10(BJPK10);
        const {
          totalList,
          pkList,
        } = self.state;
        self.clear.call(self, totalList);
        self.clear.call(self, pkList);
        self.props.updateRate(1);
      },
    };
    this.props.sendBuy(payload);
  }
  clear(list) {
    list.forEach((i) => {
      i.total.forEach((item) => {
        item.checked = false;
      });
    });
    setTimeout(() => {
      this.setState({
        list,
      });
    }, 20);
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
    this.props.updateRate(1);
  }
  delItem(item) {
    this.props.delBJPK10Item(item.index);
  }
  changeSel(value) {
    this.props.updateTypeNow(value);
  }
  render() {
    const {
      trend,
      home,
    } = this.props;
    const {
      content,
      headInfo,
      isLoading,
      typeNow,
    } = trend;
    const {
      BJPK10,
      rate,
      buyList,
      repeat,
    } = home;
    const {
      totalList,
      pkList,
      showTime,
      isShow,
    } = this.state;
    const selTitle = [
      {
        value: '两面盘',
      },
      {
        value: '1-10名',
      },
    ];
    const columns = [
      { title: '种类', dataIndex: 'type', key: 'type' },
      { title: '号码', dataIndex: 'code', key: 'code' },
      { title: '操作', dataIndex: '', key: 'x', render: record => <Icon type="delete" onClick={this.delItem.bind(this, record)} /> },
    ];
    return (
      <Row className={styles.BJPK10}>
        <Col span={24}>
          <HeadMenu back="/home" detail="/BJPK10-detail" showInfo selTitle={selTitle} changeSel={this.changeSel.bind(this)} />
        </Col>
        <Col span={24} className={styles.head} >
          <Row>
            <Col span={16} >
              <Row>
                <Col span={18} style={{ fontSize: '14px' }}>{headInfo.latestSerialCode}期开奖</Col>
                <Col span={2} onClick={this.changeShow.bind(this)}>
                  历史
                  <Icon type="down" />
                </Col>
                <Col span={24}>
                  {
                    headInfo.code ?
                      headInfo.code.map((i, index) => {
                        return (
                          <Col
                            span={2}
                            key={index}
                            className={`openCode openCodeSmall openCodeBJPK10${i}`}
                          >
                            {
                              i
                            }
                          </Col>
                        );
                      }) : '开奖中'
                  }
                </Col>
              </Row>
            </Col>
            <Col span={8} className={styles.nextSerialCode} >
              <Row>
                <Col span={24}>
                  距{headInfo.nextSerialCode}期截止
                </Col>
                <Col span={24}>
                  {content.length ? content[1].showTime : showTime}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={styles.main}>
          <Row>
            <Col span={24} className={styles.info}>
              {/* <Carousel vertical autoplay focusOnSelect dots={false} >
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
              </Carousel> */}
              <BJPK10TOP isShow={isShow} />
            </Col>
          </Row>
          {/* <Tabs renderTabBar renderTabContent defaultActiveKey="0" onTabClick={this.chooseTab.bind(this)}>*/}
          {/* <TabPane tab="两面盘" key="0" >*/}
          {
                typeNow === '两面盘' ?
                totalList.length ?
                  totalList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col xs={3} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={19} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col xs={6} sm={4} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, totalList)} id={item.id} checked={item.checked} />
                                  <Col span={6} className={styles.selBox}>
                                    <Col className={styles.selTitle}>{item.displayName}</Col>
                                  </Col>
                                  <Col className={styles.rate}>{items.rate}</Col>
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
                  })
                  : ''
                  : ''
              }
          {/* </TabPane>*/}
          {/* <TabPane tab="1-10名" key="1" >*/}
          {
                typeNow === '1-10名' ?
                pkList.length ?
                  pkList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, pkList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  <Col className={styles.rate}>{items.rate}</Col>
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
                  })
                  : ''
                  : ''
              }
          {/* </TabPane>*/}
          {/* </Tabs>*/}
          <div className={styles.lastWrap}>
            <Draggable defaultPosition={{ x: 0, y: 0 }}>
              <div className={styles.lastOne} onClick={this.getBuyList.bind(this)} >追上期</div>
            </Draggable>
          </div>
        </Col>
        <Col span={BJPK10.length ? 24 : 0} className={styles['foot-modal']}>
          <Col span={24} className={styles['foot-inner']} >
            投
            <div className={`${styles['icon-wrap']} ${rate === 1 ? styles.gray : ''}`} style={{ borderRight: 'none', borderRadius: '4px 0 0 4px' }} >
              <Icon type="minus" onClick={this.changeRate.bind(this, -1)} />
            </div>
            <div>
              <Input
                type="text"
                value={rate}
                onChange={this.calcRate.bind(this)}
                style={{ border: 'none', outline: 'none', width: '60px', borderRadius: 0, height: '32px' }}
              />
            </div>
            <div className={styles['icon-wrap']} style={{ borderLeft: 'none', borderRadius: '0 4px 4px 0' }}>
              <Icon type="plus" onClick={this.changeRate.bind(this, 1)} />
            </div>
            倍
          </Col>
        </Col>
        <Col span={24} className={styles.foot} >
          <Col
            span={8}
            className={styles.detail}
          >
            {BJPK10.length}注，共{2 * BJPK10.length * rate}元
          </Col>
          <Col span={8} className={styles.detail} >最高可中{this.state.maxRate}元</Col>
          <Col span={6} offset={2} className={styles.submit} >
            <Button size="large" type="primary" style={{ background: '#e95525' }} onClick={this.openModal.bind(this)}>投注</Button>
          </Col>
        </Col>
        <Modal
          title={`已选择彩票 (共${buyList.count}注,${buyList.times}倍,${buyList.amount}元)`}
          visible={this.state.visible}
          onOk={this.handleOk.bind(this, BJPK10, rate, repeat, headInfo.nextSerialCode)}
          confirmLoading={isLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <Row>
            <Col span={22} className={styles['modal-left']} >
              <Col span={24} className={styles['modal-type']} >
                <span>类型：</span>
                <span>{buyList.numberType}</span>
              </Col>
              <Col span={24} className={styles['modal-code']} >
                <span>号码：</span>
                <span>{buyList.numbers}</span>
              </Col>
            </Col>
            <Col span={1} className={styles['modal-del']} >
              <Icon type="delete" onClick={this.clearBuyList.bind(this)} />
            </Col>
          </Row>
        </Modal>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOpenList(cb) {
      dispatch({ type: 'trend/getOpenList', payload: cb });
    },
    updateContent(payload) {
      dispatch({ type: 'trend/updateContent', payload });
    },
    updateCtrl(payload) {
      dispatch({ type: 'home/updateCtrl', payload });
    },
    updateBJPK10(list) {
      dispatch({ type: 'home/updateBJPK10', payload: list });
    },
    updateRate(v) {
      dispatch({ type: 'home/updateRate', payload: v });
    },
    delBJPK10Item(index) {
      dispatch({ type: 'home/delBJPK10Item', payload: index });
    },
    clearBJPK10() {
      dispatch({ type: 'home/clearBJPK10' });
    },
    sendBuy(payload) {
      dispatch({ type: 'home/sendBuy', payload });
    },
    getRate(payload) {
      dispatch({ type: 'home/getRate', payload });
    },
    updateBuyList(payload) {
      dispatch({ type: 'home/updateBuyList', payload });
    },
    getBuyList(payload) {
      dispatch({ type: 'home/getBuyList', payload });
    },
    updateTypeNow(payload) {
      dispatch({ type: 'trend/updateTypeNow', payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BJPK10);
