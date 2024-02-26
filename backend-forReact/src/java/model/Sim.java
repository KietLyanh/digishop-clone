package model;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Admin
 */
public class Sim {
//        `sim_numbers`.`sim_number_name`,
//    `sim_numbers`.`sim_number_type`,
//    `sim_numbers`.`sim_number_fee`,
//    `sim_numbers`.`sim_number_time`
//FROM `sims`.`sim_numbers`;
    private String sim_number_name,sim_number_type;
    private int sim_number_id,sim_number_fee,sim_number_time;

    public Sim(String sim_number_name, String sim_number_type, int sim_number_id, int sim_number_fee, int sim_number_time) {
        this.sim_number_name = sim_number_name;
        this.sim_number_type = sim_number_type;
        this.sim_number_id = sim_number_id;
        this.sim_number_fee = sim_number_fee;
        this.sim_number_time = sim_number_time;
    }

    public String getSim_number_name() {
        return sim_number_name;
    }

    public String getSim_number_type() {
        return sim_number_type;
    }

    public int getSim_number_id() {
        return sim_number_id;
    }

    public int getSim_number_fee() {
        return sim_number_fee;
    }

    public int getSim_number_time() {
        return sim_number_time;
    }

    
    
}
