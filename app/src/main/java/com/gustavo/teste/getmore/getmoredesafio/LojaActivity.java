package com.gustavo.teste.getmore.getmoredesafio;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.method.LinkMovementMethod;
import android.util.Base64;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;

import com.gustavo.teste.getmore.getmoredesafio.model.Loja;

import java.text.DecimalFormat;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LojaActivity extends AppCompatActivity {


    private ImageView imagem;
    private TextView txtNomeLoja;
    private TextView txtTakeBack;
    private TextView txtSite;
    private RatingBar notaLoja;
    private ListView listViewCategorias;
    private int id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_loja);

        Loja loja = (Loja) getIntent().getSerializableExtra("loja");


        imagem = findViewById(R.id.fragment_loja_imagem);
        String urle = loja.getImage_blob().substring(22);
        byte[] decodeString = Base64.decode(urle, Base64.DEFAULT);
        Bitmap decoded = BitmapFactory.decodeByteArray(decodeString, 0, decodeString.length);

        txtNomeLoja = findViewById(R.id.fragment_loja_nomeLoja);
        txtTakeBack = findViewById(R.id.fragment_loja_takeback);
        txtSite = findViewById(R.id.fragment_loja_site);
        notaLoja = findViewById(R.id.fragment_loja_rating);
        listViewCategorias = findViewById(R.id.fragment_loja_categoria);

        imagem.setImageBitmap(decoded);
        txtNomeLoja.setText(loja.getName());
        String takeback_ = String.format("%.2f",loja.getTakeback());
        txtTakeBack.setText(takeback_);
        txtSite.setText(loja.getUrl());
        notaLoja.setRating(loja.getRating());

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(LojaActivity.this, android.R.layout.simple_list_item_1,loja.getCategory());
        listViewCategorias.setAdapter(adapter);

    }

}
