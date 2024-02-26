import React from "react";
import './MobileChildItems.scss';

function MobileChildDetail({allPackages}) {
    const listPackage = [
        {
            title:"Ưu đãi gói cước",
            detail:allPackages?.detail_treatment
        },
        {
            title:"Điều kiện đăng ký gói cước",
            detail:allPackages?.detail_enrollment
        },
        {
            title:"Gia hạn gói cước",
            detail:allPackages?.detail_extension
        },
        {
            title:"Quy định:",
            detail:allPackages?.detail_legacy
        },
        {
            title:"Cách kiểm tra các ưu đãi còn lại của gói cước",
            detail:allPackages?.detail_check
        },
        {
            title:"Cách hủy gói cước",
            detail:allPackages?.detail_cancel
        },
        {
            title:"Tổng đài hỗ trợ về dịch vụ di động",
            detail:allPackages?.detail_hotline
        }
    ];
    return (
        <div className="mobilechild__content-detail">

            <h3>Thông tin chi tiết</h3>
            {listPackage.map((child,index) => (
                <div key={index}>
                    <h5>{index+1}. {child.title}</h5>
                    <p>{child.detail}</p>
                </div>

            ))}
        </div>
    );
}
export default MobileChildDetail;