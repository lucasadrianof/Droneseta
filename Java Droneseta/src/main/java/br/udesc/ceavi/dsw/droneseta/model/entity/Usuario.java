package br.udesc.ceavi.dsw.droneseta.model.entity;

import java.io.Serializable;
import java.math.BigInteger;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * Entidade do Usuário
 * @author lucas.adriano
 */
@Entity
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private BigInteger id;
    
    private String cpf;
    private String nome;
    private String senha;
    private Long cartaoCredito;
    private int tipo; //@TODO Mudar para enum: 1- Normal 2- Admin
    
    @OneToOne(cascade = CascadeType.ALL)
    private Endereco endereco;
    
    @OneToOne(cascade = CascadeType.ALL)
    private Endereco enderecoEntrega;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }
    
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    public Long getCartaoCredito() {
        return cartaoCredito;
    }

    public void setCartaoCredito(Long cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }
    
    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco Endereco) {
        this.endereco = Endereco;
    }

    public Endereco getEnderecoEntrega() {
        return enderecoEntrega;
    }

    public void setEnderecoEntrega(Endereco EnderecoEntrega) {
        this.enderecoEntrega = EnderecoEntrega;
    }
    
     @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Usuario)) {
            return false;
        }
        Usuario other = (Usuario) object;
        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }


    @Override
    public String toString() {
        return "br.udesc.ceavi.dsw.droneseta.model.entity.Usuario[ id=" + id + " ]";
    }
}
