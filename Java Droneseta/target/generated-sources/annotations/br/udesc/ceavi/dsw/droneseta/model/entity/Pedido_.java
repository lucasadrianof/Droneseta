package br.udesc.ceavi.dsw.droneseta.model.entity;

import br.udesc.ceavi.dsw.droneseta.model.entity.Produto;
import br.udesc.ceavi.dsw.droneseta.model.entity.Usuario;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-06-27T01:27:22")
@StaticMetamodel(Pedido.class)
public class Pedido_ { 

    public static volatile SingularAttribute<Pedido, Integer> situacao;
    public static volatile SingularAttribute<Pedido, Usuario> Usuario;
    public static volatile ListAttribute<Pedido, Produto> produtos;
    public static volatile SingularAttribute<Pedido, Double> valor;
    public static volatile SingularAttribute<Pedido, Long> id;

}