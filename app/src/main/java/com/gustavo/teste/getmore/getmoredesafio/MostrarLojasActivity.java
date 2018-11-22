package com.gustavo.teste.getmore.getmoredesafio;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.util.Base64;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.RatingBar;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.gustavo.teste.getmore.getmoredesafio.adapter.AdapterLoja;
import com.gustavo.teste.getmore.getmoredesafio.model.Loja;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MostrarLojasActivity extends AppCompatActivity {

    private ArrayList<Loja> listaLoja = new ArrayList<>();
    private RecyclerView.Adapter adapter;
    private RecyclerView.LayoutManager mLayoutManager;
    private RecyclerView rvLojas;
    private ArrayList<String> listaCategorias = new ArrayList<String>();

    private Spinner spinner;
    private ArrayAdapter<String> adapterSpinner;
    private ShowBy showBy;

    private SwipeRefreshLayout swipe;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mostrarlojas);

        swipe = findViewById(R.id.mostrarlojas_swipeRefresh);
        swipe.setRefreshing(true);

        Toolbar toolbar = findViewById(R.id.mostrarlojas_toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);

        rvLojas = findViewById(R.id.mostrarlojas_recyclerView_lojas);
        mLayoutManager = new LinearLayoutManager(this);
        rvLojas.setLayoutManager(mLayoutManager);

        adapter = new AdapterLoja(listaLoja);

        rvLojas.setAdapter(adapter);

        listaCategorias.add("Mostrar Tudo");
        spinner = findViewById(R.id.spinner_nav);
        spinner.setAdapter(adapterSpinner);

        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                listaLoja = showBy.showByCategoria(listaCategorias.get(position));
                atualizaLista();
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        swipe.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                chamarListaLojas();
            }
        });

        chamarListaLojas();


    }


    public void chamarListaLojas() {
        Call<ArrayList<Loja>> callLojas = new RetrofitGerenciador().getLojaService().getListaLojas();
        callLojas.enqueue(new Callback<ArrayList<Loja>>() {
            @Override
            public void onResponse(Call<ArrayList<Loja>> call, Response<ArrayList<Loja>> response) {
                listaLoja = response.body();
                atualizaLista();

                int index = 0;
                for (Loja loja : listaLoja) {
                    chamarUMA_Loja(loja.getId(), index);
                    index++;
                }
                swipe.setRefreshing(false);

            }

            @Override
            public void onFailure(Call<ArrayList<Loja>> call, Throwable t) {
                swipe.setRefreshing(false);
                Toast.makeText(MostrarLojasActivity.this, "Erro ao mostrar lojas, confira sua conexão", Toast.LENGTH_LONG).show();
            }
        });
    }

    public void chamarUMA_Loja(int id, final int index) {
        Call<Loja> callLoja = new RetrofitGerenciador().getLojaService().getLojaById(id);
        callLoja.enqueue(new Callback<Loja>() {
            @Override
            public void onResponse(Call<Loja> call, Response<Loja> response) {
                Loja loja = response.body();
                listaLoja.set(index, loja);
                for (String categoria : loja.getCategory()) {
                    if (!listaCategorias.contains(categoria)) listaCategorias.add(categoria);
                    atualizaCategoria();
                }

            }

            @Override
            public void onFailure(Call<Loja> call, Throwable t) {

            }

        });
    }

    public void atualizaCategoria() {
        adapterSpinner = new ArrayAdapter<String>(MostrarLojasActivity.this, R.layout.custom_spinner_item, listaCategorias);
        adapterSpinner.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapterSpinner);
        showBy = new ShowBy(listaLoja);

    }

    public void atualizaLista() {
        adapter = new AdapterLoja(listaLoja);
        rvLojas.setAdapter(adapter);
    }
}
