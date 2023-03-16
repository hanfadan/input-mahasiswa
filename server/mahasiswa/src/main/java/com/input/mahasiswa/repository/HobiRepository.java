package com.input.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.input.mahasiswa.model.Hobi;

@Repository
public interface HobiRepository extends JpaRepository<Hobi, Long> {

}
