package com.input.mahasiswa.exception;

public class JurusanNotFoundException extends RuntimeException {
    public JurusanNotFoundException(Long id) {
        super("Jurusan tidak ditemukan dengan id " + id);
    }
}
