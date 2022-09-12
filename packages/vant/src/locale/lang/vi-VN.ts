export default {
  name: 'tên',
  tel: 'Điện thoại',
  save: 'Cứu',
  confirm: 'Xác nhận',
  cancel: 'Hủy bỏ',
  delete: 'Xóa',
  loading: 'Đang tải ...',
  noCoupon: 'Không có phiếu giảm giá',
  nameEmpty: 'Vui lòng điền vào tên',
  addContact: 'Thêm liên hệ',
  telInvalid: 'Số điện thoại không đúng định dạng',
  vanCalendar: {
    end: 'Kết thúc',
    start: 'Bắt ​​đầu',
    title: 'Lịch',
    weekdays: [
      'chủ nhật',
      'thứ hai',
      'thứ ba',
      'Thứ Tư',
      'Thứ năm',
      'Thứ sáu',
      'thứ bảy',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Chọn không quá ${maxRange} ngày`,
  },
  vanCascader: {
    select: 'Chọn',
  },
  vanPagination: {
    prev: 'Trước đó',
    next: 'Tiếp theo',
  },
  vanPullRefresh: {
    pulling: 'Kéo để làm mới ...',
    loosing: 'Loose để làm mới ...',
  },
  vanSubmitBar: {
    label: 'Tổng:',
  },
  vanCoupon: {
    unlimited: 'Không giới hạn',
    discount: (discount: number) => `Chiết khấu ${discount * 10}%`,
    condition: (condition: number) => `Ít nhất ${condition}`,
  },
  vanCouponCell: {
    title: 'Phiếu giảm giá',
    count: (count: number) => `Bạn có ${count} phiếu giảm giá`,
  },
  vanCouponList: {
    exchange: 'Trao đổi',
    close: 'Đóng',
    enable: 'Có sẵn',
    disabled: 'Không khả dụng',
    placeholder: 'Mã phiếu thưởng',
  },
  vanAddressEdit: {
    area: 'Khu vực',
    areaEmpty: 'Vui lòng chọn khu vực nhận hàng',
    addressEmpty: 'Địa chỉ không được để trống',
    addressDetail: 'Địa chỉ',
    defaultAddress: 'Đặt làm địa chỉ mặc định',
  },
  vanAddressList: {
    add: 'Thêm địa chỉ mới',
  },
};
