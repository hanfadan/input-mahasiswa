package com.input.mahasiswa.exception;

public class HobiNotFoundException extends RuntimeException {
    public HobiNotFoundException(Long id) {
        super("Hobi tidak ditemukan dengan id " + id);
    }
}
