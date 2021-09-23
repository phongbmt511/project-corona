import React from 'react'
import "./Infor.css";

export const Information = () => {
    return (
        <div className="Container_medican">
            <div className="medican_top">
                <h2>BỘ Y TẾ</h2>

            </div>
            <div className="medican_phone">
                <h1>Đường dây nóng : 19009095</h1>
            </div>
            <div className="medican_body">
                <div className="medican_body_1">
                    <h3>CHUNG SỐNG AN TOÀN VỚI ĐẠI DỊCH COVID 19</h3>

                </div>
                <div className="medican_slogen">
                    <div className="medican_text">
                        <h2>Thông điệp 5K</h2>
                    </div>

                </div>
                <div className="medican_body_5k row">
                    <div className="item1 col-sm-6">
                        <a href="#" style={{textDecoration:"none",fontSize:"2rem"}}>Khẩu trang</a>
                        <p>Đeo khẩu trang vải thường xuyên tại nơi công cộng , nơi tập trung đông người . Đeo khẩu trang y tế tại các cơ sở y tế , khu cách ly</p>
                        
                    </div>
                    <div className="item2 col-sm-6">
                        <a href="#" style={{textDecoration:"none",fontSize:"2rem"}}>Khử khuẩn</a>
                        <p>Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn tay . Vệ sinh các bề mặt vận dụng thường xuyên tiếp xúc . Giữ về sinh , lau rửa và để nhà cửa thông thoáng</p>
                    </div>
                    <div className="item3 col-sm-6">
                        <a href="#" style={{textDecoration:"none",fontSize:"2rem"}}>Không tụ tập</a>
                        <p>Không tụ tập nơi đông người</p>
                    </div>
                    <div className="item4 col-sm-6">
                        <a href="#" style={{textDecoration:"none",fontSize:"2rem"}}>khoảng cách</a>
                        <p>Giữ khoảng cách khi tiếp xúc với người khác</p>
                    </div>
                    <div className="item5">
                        <a href="#" style={{textDecoration:"none",fontSize:"2rem"}}>Khai báo Y tế</a>
                        <p>Khi có dấu hiệu SỐT , HO , KHÓ THỞ gọi Đường dây nóng 19009095 hoặc cơ quan y tế địa phương để được hướng dẫn đi khám bệnh an toàn . Thực hiện khai báo y tế trên <a href="https://ncovi.vnpt.vn/" style={{textDecoration:"none"}}>App NCOVI</a> Cài đặt ứng dụng Bluezone tại địa chỉ <a href="https:///www.bluezone.gov.vn"></a>để được cảnh báo nguy cơ lây nhiễm COVID-19 .</p>
                    </div>
                </div>
                <div className="medican_footer">
                    <h4>Hãy giữ an toàn cho Bạn và Chúng ta trước đại dịch COVID-19</h4>
                </div>


            </div>
        </div>
    )
}
