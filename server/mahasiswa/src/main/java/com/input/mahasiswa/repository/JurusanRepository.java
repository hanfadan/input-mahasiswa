package com.input.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.input.mahasiswa.model.Jurusan;

@Repository
public interface JurusanRepository extends JpaRepository<Jurusan, Long> {
}
