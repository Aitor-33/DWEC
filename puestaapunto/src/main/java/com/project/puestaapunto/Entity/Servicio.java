package com.project.puestaapunto.Entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Servicios")
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cliente cliente;

    @ManyToOne
    private Trabajador trabajador;

    @ManyToOne
    private Especialidad especialidad;

    @ManyToOne
    private Cp codigoPostal;

    private LocalDate fechaServicio;
    private LocalTime horaInicio;
    private LocalTime horaFinEstimada;
    private LocalTime horaInicioReal;
    private LocalTime horaFinReal;

    @Enumerated(EnumType.STRING)
    private EstadoServicio estado;

    private LocalDateTime fechaCreacion;
    private BigDecimal precioAcordado;
    private String direccionCompleta;
    private String notasCliente;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Cliente getCliente() {
        return cliente;
    }
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
    public Trabajador getTrabajador() {
        return trabajador;
    }
    public void setTrabajador(Trabajador trabajador) {
        this.trabajador = trabajador;
    }
    public Especialidad getEspecialidad() {
        return especialidad;
    }
    public void setEspecialidad(Especialidad especialidad) {
        this.especialidad = especialidad;
    }
    public Cp getCodigoPostal() {
        return codigoPostal;
    }
    public void setCodigoPostal(Cp codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
    public LocalDate getFechaServicio() {
        return fechaServicio;
    }
    public void setFechaServicio(LocalDate fechaServicio) {
        this.fechaServicio = fechaServicio;
    }
    public LocalTime getHoraInicio() {
        return horaInicio;
    }
    public void setHoraInicio(LocalTime horaInicio) {
        this.horaInicio = horaInicio;
    }
    public LocalTime getHoraFinEstimada() {
        return horaFinEstimada;
    }
    public void setHoraFinEstimada(LocalTime horaFinEstimada) {
        this.horaFinEstimada = horaFinEstimada;
    }
    public LocalTime getHoraInicioReal() {
        return horaInicioReal;
    }
    public void setHoraInicioReal(LocalTime horaInicioReal) {
        this.horaInicioReal = horaInicioReal;
    }
    public LocalTime getHoraFinReal() {
        return horaFinReal;
    }
    public void setHoraFinReal(LocalTime horaFinReal) {
        this.horaFinReal = horaFinReal;
    }
    public EstadoServicio getEstado() {
        return estado;
    }
    public void setEstado(EstadoServicio estado) {
        this.estado = estado;
    }
    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }
    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
    public BigDecimal getPrecioAcordado() {
        return precioAcordado;
    }
    public void setPrecioAcordado(BigDecimal precioAcordado) {
        this.precioAcordado = precioAcordado;
    }
    public String getDireccionCompleta() {
        return direccionCompleta;
    }
    public void setDireccionCompleta(String direccionCompleta) {
        this.direccionCompleta = direccionCompleta;
    }
    public String getNotasCliente() {
        return notasCliente;
    }
    public void setNotasCliente(String notasCliente) {
        this.notasCliente = notasCliente;
    }


}

