import React from 'react'
import "./LeftCv.css";

export const LeftCv = () => {
    return (
        <div className="Container_left">
            <div className="left_img">
                <img src="https://thuthuatnhanh.com/wp-content/uploads/2020/01/background-dep-don-gian.jpg" alt="" />
            </div>
            <div className="left_text">
                <h1 className="left_text1" style={{color:"white"}}>Profile</h1>
                <p className="left_text2">Full Name  : Nguyễn Hữu Phong</p>
                <p className="left_text3">Age : 19</p>
                <p className="left_text4">Country : Vietnam</p>
                <p className="left_text5">Email : phongbmt178@gmail.com</p>
                <p className="left_text6">Phone : 08464526548</p>
                <p className="left_text7">Facebook : Nguyễn Hữu Phong </p>
                <p className="left_text8">Github : <a href="#" style={{textDecoration:"none"}}>https://github.com/phongbmt511</a></p>
            </div>
        </div>
    )
}
