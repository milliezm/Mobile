import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function List() {
    const produtos = [
        { id: 0, nome: 'Cebolitos 190g', desc: 'Salgadinho Elma Chips Cebolitos 190g', ingr: 'Farinha de trigo enriquecida com ferro e ácido fólico (Bacillus thuringiensis, Agrobacterium sp, Agrobacterium tumefaciens, Streptomyces viridochromogenes, Zea mays, Dicossoma sp e Sphingobium herbicidovorans), óleo misto de palma e soja, condimento preparado com cebola {maltodextrina, sal, especiarias [cebola e salsa (alimentos tratados por processo de irradiação)], açúcar, realçadores de sabor: Glutamato monossódico, inosinato dissódico e guanilato dissódico, gelificante cloreto de potássio, antiumectante: Dióxido de silício e fosfato tricálcico, aromatizantes, acidulantes: Ácido cítrico e ácido tartárico e regulador de acidez citrato de potássio}. Alérgicos: Contém derivados de soja. Pode conter trigo, centeio, cevada, aveia e leite. Contém glúten.', valorcal: 'Porção de 25g (1 1/2 xícara): 129Kcal', preco: 'R$14,99'},
        { id: 1, nome: 'Doritos Original 140g', desc: 'Salgadinho Elma Chips Doritos 140g', ingr: 'Milho (bacillus thuringiensis e streptomyces viridochromogenes), óleo misto vegetal de palma e soja e preparado para salgadinho com queijo (maltodextrina, sal, soro de leite, cebola, óleo vegetal de canola, queijo cheddar, açúcar, alho, lactose, especiarias, sólidos de leite desengordurado, queijo romano, caseinato de sódio, óleo vegetal de girassol, queijo parmesão, realçadores de sabor: glutamato monossódico, inosinato dissódico e guanilato dissódico, aromatizantes, regulador de acidez fosfato dissódico, acidulante ácido cítrico, corantes: caramelo IV e amarelo crepúsculo FCF e antiumectante dióxido de silício).', valorcal: 'Porção de 25g (1 1/2 xícara): 125kcal', preco: 'R$13,99'},
        { id: 2, nome: 'Ebicen Camarão', desc: 'Salgadinho Ebicen sabor Camarão 30g', ingr: 'Ingredientes: Farinha de trigo enriquecida com ferro e ácido fólico, fécula de mandioca, camarão, óleo vegetal, sal iodado, açúcar cristal, realçador de sabor glutamato monossódico. Alérgicos: contém derivados de trigo e crustáceos (camarão). Pode conter outros frutos do mar. Contém glúten.', valorcal: 'Porção de 25g (1/2 xícara): 104kcal', preco: 'R$2,99'},
        { id: 3, nome: 'Cheetos Lua Parmesão 125g', desc: 'Salgadinho Elma Chips Cheetos sabor Lua Parmesão 125g', ingr: 'Farinha de milho enriquecida com ferro e ácido fólico, (bacillus thuringiensis, agrobacterium sp, agrobacterium tumefaciens, streptomyces viridochromogenes, zea mays, dicossoma sp e sphingobium herbicidovorans), óleo vegetal de soja, preparado para salgadinho com queijo parmesão (permeado de soro de leite, dextrose, sal, cloreto de potássio, maltodextrina, queijo parmesão, realçadores de sabor: glutamato monossódico, inosinato dissódico e guanilato dissódico, aromatizante, antiumectante dióxido de silício e emulsificante goma arábica), sal, óleo vegetal de palma, xarope de milho, caseinato de sódio, antiumectantes: carbonato de cálcio e dióxido de silício, reguladores de acidez: fosfato dipotássico e ácido cítrico e emulsificante mono e diglicerídeos de ácidos graxos.', valorcal: 'Porção de 25g (1 1/2 xícara): 124kcal', preco: 'R$11,99'},
        { id: 4, nome: 'Torcida Cebola 100g', desc: 'Salgadinho de trigo Torcida sabor Cebola 100g', ingr: 'Farinha de trigo enriquecida com ferro e ácido fólico, óleo vegetal de soja, amido de milho (agrobacterium tumefaciens e/ou streptomyces viridochromogenes e/ou bacillus thuringiensis e/ou zea mays e/ou sphingobium herbicidovorans), condimento preparado sabor carne (maltodextrina, sal, açúcar, cloreto de potássio, amido modificado, cebola, realçadores de sabor, glutamato monossódico, guanilato dissódico e inosinato dissódico, aromatizante, antiumectante dióxido de silício e acidulante ácido cítrico) e sal.', valorcal: 'Porção de 25g (1 xícara): 138kcal', preco: 'R$5,99'},
        { id: 5, nome: 'Fandangos Presunto 105g', desc: 'Salgadinho Elma Chips Fandangos sabor Presunto 105g', ingr: 'Farinha de milho enriquecida com ferro e ácido fólico*, óleo de soja e aromatizante. * Ingrediente contendo genes de bacillus thuringiensis, agrobacterium sp, agrobacterium tumefaciens, streptomyces viridochromogenes, zea mays, dicossoma sp e sphingobium herbicidovorans.', valorcal: 'Porção de 25g (1 1/2 xícara): 123kcal', preco: 'R$9,99'},
        { id: 6, nome: 'Takis Hot Chilli 56g', desc: 'Salgadinho de milho Takis Hot Chilli 56g', ingr: 'Farinha de milho enriquecida com ferro e ácido fólico, óleo composto de canola e palma e preparado para salgadinho sabor carne grelhada picante com especiarias (maltodextrina, sal, amido de milho, pimenta em pó e cebola em pó [alimentos tratados por processo de irradiação], açúcar, triglicerídeos de cadeia média, realçador de sabor glutamato monossódico, acidulante ácido cítrico, antiumectante dióxido de silício, regulador de acidez diacetato de sódio, aromatizantes, corantes vermelho allura Ac, amarelo crepúsculo FCF e azul brilhante FCF).', valorcal: 'Porção de 25g (1/2 xícara): 128kcal', preco: 'R$5,99'},
    ];

    const renderItems = () => {
        return produtos.map((item) => (
            <ScrollView style={styles.container}>
                <TouchableOpacity key={item.id}
                    style={styles.botao}
                    onPress={() => alertItemName(item)}>
                    <View style={styles.texto}>
                        <Text style={styles.texto}>{item.nome}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        ));
    };

    const alertItemName = (item) => {
        alert("Produto: " + item.nome +
            "\n Descrição: " + item.desc +
            "\n Ingredientes:" + item.ingr +
            "\n Valor calórico: " + item.valorcal +
            "\n Preço: " + item.preco)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Millienium</Text>
            {renderItems()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingTop: 15
    },
    botao: {
        padding: 16,
        marginTop: 3,
        backgroundColor: '#152a4a',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fcba03'
    },
    titulo:{
        fontSize: 30,
        margin: 'auto',
        fontWeight: 'bold',
        color: '#284b82',
        paddingTop: 30
    }
});