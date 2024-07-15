import { HiOutlineDatabase } from "react-icons/hi";
import {
  HiOutlineBackward,
  HiOutlineBookmark,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineBuildingLibrary,
  HiOutlineCalendarDays, 
  HiOutlineChatBubbleBottomCenterText, 
  HiOutlineChatBubbleOvalLeftEllipsis, 
  HiOutlineInboxArrowDown, 
  HiOutlineInformationCircle,
  HiOutlinePrinter,
  HiOutlineUserGroup
} from "react-icons/hi2";

export const navItems = {
  "昆仑故事": [
    { name: '关于我们', href: '/about', icon: HiOutlineInformationCircle },
    { name: '活动预告', href: 'http://dayuoa.com/kunlunnest/eventplan', icon: HiOutlineCalendarDays },
    { name: '活动回顾', href: 'http://dayuoa.com/kunlunnest/event', icon: HiOutlineBackward },
  ],
  "内容生态": [
    { name: '苏菂说', href: '#', icon: HiOutlineChatBubbleBottomCenterText },
    { name: '巢青年', href: '#', icon:HiOutlineUserGroup },
    { name: 'CEO 聊日常', href: '#', icon: HiOutlineChatBubbleOvalLeftEllipsis },
    { name: '3D 打印开放实验室', href: 'http://dayuoa.com/info/kopen-3dp', icon: HiOutlinePrinter },
    { name: '科技历史博物馆', href: 'http://vjianjie.com/e-museum', icon: HiOutlineBuildingLibrary },
  ],
  "巢脉": [
    { name: '资源库', href: 'http://dayuoa.com/hub/kunlunnest', icon: HiOutlineDatabase },
    { name: '知识库', href: 'http://dayuoa.com/info/kunlunnest', icon: HiOutlineBookOpen },
    { name: '申请入库', href: 'http://dayuoa.com/hub/apply/kunlunnest', icon: HiOutlineBookmark },
  ],
  "联系我们": [
    { name: '招募信息', href: '#', icon: HiOutlineBriefcase },
    { name: '场地申请', href: 'http://wzurl.cn/wj/9HDB8VeMh6', icon: HiOutlineInboxArrowDown },
  ],
}