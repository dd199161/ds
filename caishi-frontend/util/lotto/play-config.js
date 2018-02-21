const POSITION = ['万', '千', '百', '十', '个'].map(_ => `${_}位`)

const cnNum = ['一','二','三','四','五','六','七','八','九','十']

const POSITION_ORDER = (end,begin = 0,label = '名') => cnNum.slice(begin,end).map((v,k) => `第${v}${label}`)
const SIZE = ['大','小','单','双']
const num = (n,double) => [...Array(n)].map((v, k) => double ? double(k) : k)
const defaultNum = num(10)
const x511Num = num(11,index => `${index >= 9 ? '' : '0'}${index + 1}`)
const pk10Num = num(10,index => `${index >= 9 ? '' : '0'}${index + 1}`)
const kl8Num = pos => num(40,index => `${index >= 9 ? '' : pos === 'down' ? '' : '0'}${index + (pos === 'down' ? 41 : 1)}`)
const removeButton = ['清']
const toggleButton = ['全','清']

//config may Boolean
const SPECIAL = ['特殊号',['豹','顺','对'],{tool:toggleButton}]
const BUDINGWEI = ['不定位',defaultNum]
const DANTUO = [['胆码','拖码'],x511Num,[{tool:false}]]
const kl8UpDown = [['上','下'],[kl8Num(),kl8Num('down')],[{tool:removeButton},{tool:removeButton}]]
const ball = (position,n = defaultNum,config = []) => {
  const balls = n === '11x5' ? x511Num : n === 'pk10' ? pk10Num : Array.isArray(n) ? n : num(n)
  if (typeof position === 'number') {
    // is11x5 ? POSITION_ORDER : POSITION
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence ...not require ()
    return [POSITION.slice(...position > 10 ? String(position).split('') : [0,position]), balls].concat(config)
  }
  return [position, balls].concat(config)
}
//build/get-static.js:55 code.replace('playConfig','module.exports')
// prepack-webpack-plugin test can't match this file,only webpack dist file
playConfig = {
  //nodejs output object keys
  wuxing_zhixuan_fs: ball(5),
  //number ds textarea
  wuxing_zhixuan_ds:5,
  wuxing_zuxuan_120:ball('组选120'),
  wuxing_zuxuan_60:ball(['二重号','单号']),
  wuxing_zuxuan_30:ball(['二重号','单号']),
  wuxing_zuxuan_20:ball(['三重号','单号']),
  wuxing_zuxuan_10:ball(['三重号','二重号']),
  wuxing_zuxuan_5:ball(['四重号','单号']),
  qiansi_zhixuan_fs:ball(4),
  qiansi_zhixuan_ds:4,
  qiansi_zuxuan_24:ball('组选24'),
  qiansi_zuxuan_12:ball(['二重号','单号']),
  qiansi_zuxuan_6:ball('二重号'),
  qiansi_zuxuan_4:ball(['三重号','单号']),
  housi_zhixuan_fs:ball(15),
  housi_zhixuan_ds:4,
  housi_zuxuan_24:ball('组选24'),
  housi_zuxuan_12:ball(['二重号','单号']),
  housi_zuxuan_6:ball('二重号'),
  housi_zuxuan_4:ball(['三重号','单号']),
  qiansan_zhixuan_fs:ball(3),
  //14 => 1,4 , ['万', '千', '百', '十', '个'].slice(1,4) => ['千', '百', '十']
  zhongsan_zhixuan_fs:ball(14),
  housan_zhixuan_fs:ball(25),
  qiansan_zhixuan_ds:3,
  zhongsan_zhixuan_ds:3,
  housan_zhixuan_ds:3,
  qiansan_zuxuan_zux3:ball('组三'),
  zhongsan_zuxuan_zux3:ball('组三'),
  housan_zuxuan_zux3:ball('组三'),
  qiansan_zuxuan_zux6:ball('组六'),
  zhongsan_zuxuan_zux6:ball('组六'),
  housan_zuxuan_zux6:ball('组六'),
  qiansan_qita_hezhiwz:ball('尾数'),
  zhongsan_qita_hezhiwz:ball('尾数'),
  housan_qita_hezhiwz:ball('尾数'),
  qiansan_qita_bz:SPECIAL,
  zhongsan_qita_bz:SPECIAL,
  housan_qita_bz:SPECIAL,
  qiansan_qita_sz:SPECIAL,
  zhongsan_qita_sz:SPECIAL,
  housan_qita_sz:SPECIAL,
  qiansan_qita_dz:SPECIAL,
  zhongsan_qita_dz:SPECIAL,
  housan_qita_dz:SPECIAL,
  erxing_zhixuan_qianerfs:ball(2),
  erxing_zhixuan_qianerds:2,
  erxing_zhixuan_houerfs:ball(35),
  erxing_zhixuan_houerds:2,
  erxing_zuxuan_qianerzxfs:ball('前二组选'),
  erxing_zuxuan_qianerzxds:2,
  erxing_zuxuan_houerzxfs:ball('后二组选'),
  erxing_zuxuan_houerzxds:2,
  dingweidan_dingweidan_dwq:ball(5),
  budingwei_sanxingbudingwei_qiansanyimabdw:BUDINGWEI,
  budingwei_sanxingbudingwei_qiansanermabdw:BUDINGWEI,
  budingwei_sanxingbudingwei_zhongsanyimabdw:BUDINGWEI,
  budingwei_sanxingbudingwei_housanyimabdw:BUDINGWEI,
  budingwei_sixingbudingwei_qiansiyimabdw:BUDINGWEI,
  budingwei_sixingbudingwei_qiansiermabdw:BUDINGWEI,
  budingwei_wuxingbudingwei_wuxingyimabdw:BUDINGWEI,
  budingwei_wuxingbudingwei_wuxingermabdw:BUDINGWEI,
  budingwei_wuxingbudingwei_wuxingsanmabdw:BUDINGWEI,
  sanma_zhixuan_qiansanzhixuanfs:ball(3 ,'11x5'),
  sanma_zhixuan_zhongsanzhixuanfs:ball(14 ,'11x5'),
  sanma_zhixuan_housanzhixuanfs:ball(25 ,'11x5'),
  // '01 02 03'.length 2 * 3 + (3 - 1)
  // 81 ,the second num is a no-repeat flag
  sanma_zhixuan_qiansanzhixuands:8,
  sanma_zhixuan_zhongsanzhixuands:8,
  sanma_zhixuan_housanzhixuands:8,
  sanma_zuxuan_qiansanzuxuands:8,
  sanma_zuxuan_zhongsanzuxuands:8,
  sanma_zuxuan_housanzuxuands:8,
  sanma_zuxuan_qiansanzuxuanfs:ball('前三组选','11x5'),
  sanma_zuxuan_zhongsanzuxuanfs:ball('中三组选','11x5'),
  sanma_zuxuan_housanzuxuanfs:ball('后三组选','11x5'),
  erma_zhixuan_qianerzhixuanfs:ball(2,'11x5'),
  erma_zhixuan_houerzhixuanfs:ball(35,'11x5'),
  erma_zhixuan_qianerzhixuands:5,
  erma_zhixuan_houerzhixuands:5,
  erma_zuxuan_qianerzuxuanfs:ball('前二组选','11x5'),
  erma_zuxuan_houerzuxuanfs:ball('后二组选','11x5'),
  erma_zuxuan_qianerzuxuandt:DANTUO,
  erma_zuxuan_houerzuxuandt:DANTUO,
  budingwei_budingwei_qiansanbdw:ball('前三位','11x5'),
  budingwei_budingwei_zhongsanbdw:ball('中三位','11x5'),
  budingwei_budingwei_housanbdw:ball('后三位','11x5'),
  dingweidan_dingweidan_dwd:ball(POSITION_ORDER(3,'位'),'11x5'),
  // renxuan_renxuands_ds1z1:2,
  // renxuan_renxuands_ds2z2:5,
  // renxuan_renxuands_ds3z3:2*3 + (3-1),
  // renxuan_renxuands_ds4z4:2 * 4 + (4 - 1),
  // renxuan_renxuands_ds5z5:2 * 5 + (5-1),
  // renxuan_renxuands_fs6z5:2 * 6 + (6-1),
  // renxuan_renxuands_ds7z5:2 * 7 + (7 -1),
  // renxuan_renxuands_ds8z5:2 * 8 + (8 - 1),
  // renxuan_renxuanfs_fs1z1:ball('一中一','11x5'),
  // renxuan_renxuanfs_fs2z2:ball('二中二','11x5'),
  // renxuan_renxuanfs_fs3z3:ball('三中三','11x5'),
  // renxuan_renxuanfs_fs4z4:ball('四中四','11x5'),
  // renxuan_renxuanfs_fs5z5:ball('五中五','11x5'),
  // renxuan_renxuanfs_fs6z5:ball('六中五','11x5'),
  // renxuan_renxuanfs_fs7z5:ball('七中五','11x5'),
  // renxuan_renxuanfs_fs8z5:ball('八中五','11x5'),
  // dantuo_dantuo_dt2z2:DANTUO,
  // dantuo_dantuo_dt3z3:DANTUO,
  // dantuo_dantuo_dt4z4:DANTUO,
  // dantuo_dantuo_dt5z5:DANTUO,
  // dantuo_dantuo_dt6z5:DANTUO,
  // dantuo_dantuo_dt7z5:DANTUO,
  // dantuo_dantuo_dt8z5:DANTUO,
  yixing_qianyi_fs:ball('冠军','pk10'),
  erxing_qianer_fs:ball(['冠军','亚军'],'pk10'),
  erxing_qianer_ds:5,
  sanxing_qiansan_fs:ball(['冠军','亚军','季军'],'pk10'),
  sanxing_housan_fs:ball(POSITION_ORDER(10,7),'pk10'),
  sanxing_qiansan_ds:8,
  sanxing_housan_ds:8,
  sixing_qiansi_fs:ball(POSITION_ORDER(4),'pk10'),
  sixing_housi_fs:ball(POSITION_ORDER(10,6),'pk10'),
  sixing_qiansi_ds:11,
  sixing_housi_ds:11,
  quwei_quwei_ds:['和值单双',['单','双'],{tool:toggleButton}],
  quwei_quwei_dx:['和值大小',['大','和','小'],{tool:toggleButton}],
  quwei_quwei_sx:['上下盘',['上','中','下'],{tool:toggleButton}],
  quwei_quwei_ds:['奇偶盘',['奇','和','偶'],{tool:toggleButton}],
}

Array.from(Array(8)).forEach((v,k) => {
  const num = k + 1
  const second = Math.min(5,num)
  const cnNum2Index = k >= 4 ? 4 : k
  playConfig[`renxuan_renxuands_ds${num}z${second}`] = 2*num + num - 1
  playConfig[`renxuan_renxuanfs_fs${num}z${second}`] = ball(`${cnNum[k]}中${cnNum[cnNum2Index]}`,'11x5')
  let _DANTUO = DANTUO
  if(k > 0) {
    if(k >= 3) {
      _DANTUO = [...DANTUO]
      _DANTUO[2] = [{tool:removeButton}]
    }
    playConfig[`dantuo_dantuo_dt${num}z${second}`] = _DANTUO
  }
})

Array.from(Array(7)).forEach((v,k) => {
  let _kl8UpDown = kl8UpDown
  if(k > 0) {
    _kl8UpDown = [...kl8UpDown]
    _kl8UpDown[2] =  _kl8UpDown[2].concat({limit:8})
  }
  playConfig[`renxuan_renxuan_rx${k + 1}`] = _kl8UpDown
})
