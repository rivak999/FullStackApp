package com.FS2.FStack2.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Candidat{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String username;
    private String FName;
    private String LName;
    private String opt;
    private String NameOpt;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFName() {
        return FName;
    }

    public void setFName(String FName) {
        this.FName = FName;
    }

    public String getLName() {
        return LName;
    }

    public void setLName(String LName) {
        this.LName = LName;
    }

    public String getOpt() {
        return opt;
    }

    public void setOpt(String opt) {
        this.opt = opt;
    }

    public String getNameOpt() {
        return NameOpt;
    }

    public void setNameOpt(String nameOpt) {
        NameOpt = nameOpt;
    }


    public Candidat() {

    }





}



/*Candidat(nom,prenom,username,cv,path,option,nomoption) save candidat + 2 select stage+placement la nsayev nom option
placement(id,nom,Delai) button fetch nom prenom candidat where option=placement and nomoption=
stage(id,nom,debut,fin)  button fetch nom prenom candidat where option=stage and nomoption=
entretien(id,nom,username,interviewer,date) select username la l candidat*/