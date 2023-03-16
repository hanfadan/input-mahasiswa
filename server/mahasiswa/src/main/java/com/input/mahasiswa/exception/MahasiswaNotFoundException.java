package com.input.mahasiswa.exception;

public class MahasiswaNotFoundException extends RuntimeException {
    public MahasiswaNotFoundException(Long id) {
        super("Mahasiswa tidak ditemukan dengan id " + id);
    }
}
