package br.udesc.ceavi.dsw.droneseta.model.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Entidade do Usuário
 * @author lucas.adriano
 */
@Entity
@XmlRootElement
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    private Integer cpf;
    private String nome;
    private int cartaoCredito;
    
    @OneToOne
    private Endereco Endereco;
    
    @OneToOne
    private Endereco EnderecoEntrega;

    public Integer getCpf() {
        return cpf;
    }

    public void setCpf(Integer cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getCartaoCredito() {
        return cartaoCredito;
    }

    public void setCartaoCredito(int cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }

    public Endereco getEndereco() {
        return Endereco;
    }

    public void setEndereco(Endereco Endereco) {
        this.Endereco = Endereco;
    }

    public Endereco getEnderecoEntrega() {
        return EnderecoEntrega;
    }

    public void setEnderecoEntrega(Endereco EnderecoEntrega) {
        this.EnderecoEntrega = EnderecoEntrega;
    }
    
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (cpf != null ? cpf.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Usuario)) {
            return false;
        }
        Usuario other = (Usuario) object;
        return !((this.cpf == null && other.cpf != null) || (this.cpf != null && !this.cpf.equals(other.cpf)));
    }

    @Override
    public String toString() {
        return "br.udesc.ceavi.dsw.droneseta.model.entity.Usuario[ id=" + cpf + " ]";
    }
}
