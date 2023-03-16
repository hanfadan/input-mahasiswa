package com.input.mahasiswa.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity
@Data
public class Mahasiswa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nama")
    private String nama;

    @Column(name = "tgl_lahir")
    @Temporal(TemporalType.DATE)
    private Date tgl_lahir;

    @Column(name = "gender")
    private Integer gender;

    @ManyToOne
    @JoinColumn(name = "id_jurusan")
    private Jurusan jurusan;

}