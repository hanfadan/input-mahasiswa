package com.input.mahasiswa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.input.mahasiswa.model.Mahasiswa;

public interface MahasiswaRepository extends JpaRepository<Mahasiswa, Long> {
}
