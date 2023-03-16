package com.input.mahasiswa.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class MahasiswaHobi {
    @Id
    private Long id;

    // Many-to-one relationship with table1
    @ManyToOne
    @JoinColumn(name = "id_mahasiswa")
    private Mahasiswa mahasiswa;

    // Many-to-one relationship with table2
    @ManyToOne
    @JoinColumn(name = "id_hobi")
    private Hobi hobi;
}
