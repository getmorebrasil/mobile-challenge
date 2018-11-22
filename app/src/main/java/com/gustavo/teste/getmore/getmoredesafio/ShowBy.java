package com.gustavo.teste.getmore.getmoredesafio;

import android.widget.ListView;

import com.gustavo.teste.getmore.getmoredesafio.model.Loja;

import java.util.ArrayList;

public class ShowBy {
    ArrayList<Loja> lojas;

    ShowBy(ArrayList<Loja> lista) {
        lojas = lista;
    }

    public ArrayList<Loja> showByCategoria(String categoria_) {
        ArrayList<Loja> lojasDeCategoria = new ArrayList<>();
        if (categoria_.equals("Mostrar Tudo")) {
            return lojas;
        } else {
            for (Loja loja : lojas) {
                for (String categoria : loja.getCategory()) {
                    if (categoria_.equals(categoria)) lojasDeCategoria.add(loja);
                }
            }

            return lojasDeCategoria;
        }
    }
}
