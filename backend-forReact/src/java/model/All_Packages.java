/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author ngotr
 */
public class All_Packages {
    private String packages_id, packages_name;
    private int packages_price,packages_timelimit;
    private String detail_id,detail_treatment,detail_cancel;
    private String detail_check,detail_legacy,detail_extension,detail_hotline,detail_enrollment;

    public All_Packages(String packages_id, String packages_name, int packages_price, int packages_timelimit, String detail_id, String detail_treatment, String detail_cancel, String detail_check, String detail_legacy, String detail_extension, String detail_hotline, String detail_enrollment) {
        this.packages_id = packages_id;
        this.packages_name = packages_name;
        this.packages_price = packages_price;
        this.packages_timelimit = packages_timelimit;
        this.detail_id = detail_id;
        this.detail_treatment = detail_treatment;
        this.detail_cancel = detail_cancel;
        this.detail_check = detail_check;
        this.detail_legacy = detail_legacy;
        this.detail_extension = detail_extension;
        this.detail_hotline = detail_hotline;
        this.detail_enrollment = detail_enrollment;
    }

    public String getPackages_id() {
        return packages_id;
    }

    public String getPackages_name() {
        return packages_name;
    }

    public int getPackages_price() {
        return packages_price;
    }

    public int getPackages_timelimit() {
        return packages_timelimit;
    }

    public String getDetail_id() {
        return detail_id;
    }

    public String getDetail_treatment() {
        return detail_treatment;
    }

    public String getDetail_cancel() {
        return detail_cancel;
    }

    public String getDetail_check() {
        return detail_check;
    }

    public String getDetail_legacy() {
        return detail_legacy;
    }

    public String getDetail_extension() {
        return detail_extension;
    }

    public String getDetail_hotline() {
        return detail_hotline;
    }

    public String getDetail_enrollment() {
        return detail_enrollment;
    }
    
    
}
