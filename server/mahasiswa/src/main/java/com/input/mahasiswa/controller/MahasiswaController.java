package com.input.mahasiswa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.input.mahasiswa.exception.MahasiswaNotFoundException;
import com.input.mahasiswa.model.Hobi;
import com.input.mahasiswa.model.Jurusan;
import com.input.mahasiswa.model.Mahasiswa;
import com.input.mahasiswa.model.MahasiswaHobi;
import com.input.mahasiswa.repository.HobiRepository;
import com.input.mahasiswa.repository.JurusanRepository;
import com.input.mahasiswa.repository.MahasiswaHobiRepository;
import com.input.mahasiswa.repository.MahasiswaRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class MahasiswaController {

    @Autowired
    private MahasiswaRepository mahasiswaRepository;

    @Autowired
    private JurusanRepository jurusanRepository;

    @Autowired
    private HobiRepository hobiRepository;

    @Autowired
    private MahasiswaHobiRepository mahasiswaHobiRepository;

    @PostMapping("/mahasiswa")
    ResponseEntity<Mahasiswa> saveMahasiswa(@RequestBody Mahasiswa mahasiswa) {
        Mahasiswa savedMahasiswa = mahasiswaRepository.save(mahasiswa);
        // Mahasiswa mahasiswa2 =
        // mahasiswaRepository.findById(mahasiswa.getId()).orElse(null);
        // Hobi hobi = hobiRepository.findById(mahasiswa.get).orElse(null);
        // MahasiswaHobi mahasiswaHobi = new MahasiswaHobi();
        // mahasiswaHobi.setMahasiswa(mahasiswa2);
        // mahasiswaHobi.setHobi(hobi);
        // mahasiswaHobiRepository.save(mahasiswaHobi);
        return ResponseEntity.ok(savedMahasiswa);
    }

    @PostMapping("/jurusan")
    ResponseEntity<Jurusan> saveJurusan(@RequestBody Jurusan jurusan) {
        Jurusan savedJurusan = jurusanRepository.save(jurusan);
        return ResponseEntity.ok(savedJurusan);
    }

    @PostMapping("/hobi")
    ResponseEntity<Hobi> saveHobi(@RequestBody Hobi hobi) {
        Hobi savedHobi = hobiRepository.save(hobi);
        return ResponseEntity.ok(savedHobi);
    }

    @PostMapping("/mahasiswas")
    public List<Mahasiswa> addMahasiswa(@RequestBody List<Mahasiswa> mahasiswa) {
        return mahasiswaRepository.saveAll(mahasiswa);
    }

    @PostMapping("/jurusans")
    public List<Jurusan> addJurusan(@RequestBody List<Jurusan> jurusan) {
        return jurusanRepository.saveAll(jurusan);
    }

    @PostMapping("/hobis")
    public List<Hobi> addHobi(@RequestBody List<Hobi> hobi) {
        return hobiRepository.saveAll(hobi);
    }

    @GetMapping("/mahasiswa")
    List<Mahasiswa> getMahasiswas() {
        return mahasiswaRepository.findAll();
    }

    @GetMapping("/jurusan")
    List<Jurusan> getjJurusans() {
        return jurusanRepository.findAll();
    }

    @GetMapping("/mahasiswa/{id}")
    Mahasiswa getMahasiswaById(@PathVariable Long id) {
        return mahasiswaRepository.findById(id)
                .orElseThrow(() -> new MahasiswaNotFoundException(id));
    }

    @PutMapping("/mahasiswa/{id}")
    Mahasiswa updateMahasiswa(@RequestBody Mahasiswa updateMahasiswa, @PathVariable Long id) {
        return mahasiswaRepository.findById(id)
                .map(mahasiswa -> {
                    mahasiswa.setNama(updateMahasiswa.getNama());
                    mahasiswa.setTgl_lahir(updateMahasiswa.getTgl_lahir());
                    mahasiswa.setGender(updateMahasiswa.getGender());
                    return mahasiswaRepository.save(mahasiswa);
                }).orElseThrow(() -> new MahasiswaNotFoundException(id));
    }

    @DeleteMapping("/mahasiswa/{id}")
    String deleteMahasiswa(@PathVariable Long id) {
        if (!mahasiswaRepository.existsById(id)) {
            throw new MahasiswaNotFoundException(id);
        }
        mahasiswaRepository.deleteById(id);
        return "Mahasiswa dengan id " + id + " telah dihapus";
    }

}
