package com.educativa.ova.modelo;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="usuario_recurso")
@ToString
@EqualsAndHashCode
public class RecursoUsuario {

    @Id
    @Getter
    @Setter
    @Column(name ="id")
    private long id;


    @Getter
    @Setter
    @Column(name ="id_usuario")
    private long iduser;

    @Getter @Setter  @Column(name ="id_recurso")
    private long idrecurso;

    @Getter @Setter  @Column(name ="nota")
    private long nota;

    @Getter @Setter  @Column(name ="vista")
    private long vista;

}
