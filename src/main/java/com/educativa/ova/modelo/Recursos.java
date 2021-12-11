package com.educativa.ova.modelo;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="recursos")
@ToString
@EqualsAndHashCode
public class Recursos {

    @Id
    @Getter
    @Setter
    @Column(name ="id_recurso")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter @Setter @Column(name ="url")
    private String url;

    @Getter @Setter @Column(name ="texto")
    private String text;
}
