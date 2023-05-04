import { h } from 'vue'
import { ElMessageBox } from 'element-plus';

// type
const getIconUrl = (type?:string): string => {
  if(type === 'success') { // 成功
    return '/u90.png';
  }
  if(type === 'warning') { // 警告
    return '/u99.png';
  }
  if(type === 'danger') { // 危险
    return '/u95.png';
  }
  if(type === 'info') {
    return '/u81.png';
  }
  return ''; // 默认
}

// 文本溢出
const getEllipsisRows = (ellipsis?:boolean, row?:number):string => {
  if(!ellipsis) return '';
  if(row === 1) {
    return 'ellipsis';
  }
  if(row === 2) {
    return 'ellipsis-2';
  }
  if(row === 3) {
    return 'ellipsis-3';
  }
  return '';
}

type DefaultProps = {
  type?: string; // 弹窗类型
  title?: string; // title
  rows?: number;
  ellipsis?: boolean;
  content: string; // 文本
  beforeClose?: Function; // 弹窗关闭前调用
  showCancelButton?: boolean; // 显示取消按钮
  confirmButtonText?: string; // 确认文本
  cancelButtonText?: string; // 取消文本
  isLoading?: boolean; // 是否显示加载动作
  cancel?: Function; // 点击取消的回调
  submit?: Function; // 点击确定的回调
}

// 弹窗
const MessageBox = ({
  cancel,
  submit,
  beforeClose,
  type = 'info',
  content = '',
  title = '',
  rows = 1,
  ellipsis = false,
  showCancelButton = true,
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  isLoading = false,
}: DefaultProps) => {
  ElMessageBox({
    title,
    message: h('div', 
      null,
      [
        h('div', { 
          class: 'flex-align-center',
        }, [
          getIconUrl(type) && h('img', { 
            class: 'mr5',
            style: 'width:22px;height:24px', 
            src: getIconUrl(type) 
          }),
          h('span', null, '这是一条通知信息')
        ]),
        h('div', { 
          class: 'flex-align-center',
        }, [
          h('div', { class: `ml32 ${getEllipsisRows(ellipsis, rows)}`,color: '#999' }, content),
        ]),
      ]
    ),
    showCancelButton: showCancelButton,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    beforeClose: (action:any, instance:any, done:any) => {
      if (action === 'confirm') {
        if(isLoading) {
          instance.confirmButtonLoading = true;
          instance.confirmButtonText = 'loading...';
          setTimeout(() => {
            done()
            submit && submit()
            setTimeout(() => {
              instance.confirmButtonLoading = false;
            }, 100)
          }, 1000)
        } else {
          beforeClose && beforeClose(action, instance, done)
          done()
          submit && submit()
        }
      } else {
        cancel && cancel()
        done()
      }
    }
  })
}

export default MessageBox;