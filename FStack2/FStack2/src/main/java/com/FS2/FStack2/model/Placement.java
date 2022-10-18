package com.FS2.FStack2.model;
import javax.persistence.*;
import java.util.Date;


@Entity
public class Placement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private Date delay;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDelay() {
        return delay;
    }

    public void setDelay(Date delay) {
        this.delay = delay;
    }

    public Placement() {
    }
}