package com.gustavo.teste.getmore.getmoredesafio.adapter;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.gustavo.teste.getmore.getmoredesafio.LojaActivity;
import com.gustavo.teste.getmore.getmoredesafio.R;
import com.gustavo.teste.getmore.getmoredesafio.model.Loja;

import java.util.List;

public class AdapterLoja extends RecyclerView.Adapter<AdapterLoja.MyViewHolder> {

    public AdapterLoja(List<Loja> lista) {
        this.lista = lista;
    }

    private List<Loja> lista;

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        MyViewHolder vh = new MyViewHolder(LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.loja, viewGroup, false));

        return vh;
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder myViewHolder, final int i) {
        String takeback_ = String.format("%.2f",lista.get(i).getTakeback());
        myViewHolder.takeback.setText(takeback_);
        myViewHolder.nomeLoja.setText(lista.get(i).getName());

        String urle = (lista.get(i).getImage_blob()).substring(22);


        byte[] decodeString = Base64.decode(urle, Base64.DEFAULT);
        Bitmap decoded = BitmapFactory.decodeByteArray(decodeString, 0, decodeString.length);
        myViewHolder.imageLoja.setImageBitmap(decoded);

        myViewHolder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), LojaActivity.class);
                intent.putExtra("loja",lista.get(i));
                v.getContext().startActivity(intent);
            }
        });


    }

    @Override
    public int getItemCount() {
        return (null != lista ? lista.size() : 0);
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        public ImageView imageLoja;
        public TextView nomeLoja;
        public TextView takeback;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            imageLoja = itemView.findViewById(R.id.loja_Image);

            nomeLoja = itemView.findViewById(R.id.loja_nomeLoja);
            takeback = itemView.findViewById(R.id.loja_takeback);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    System.out.println(nomeLoja.getText());
                }
            });

        }
    }
}
