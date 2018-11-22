package com.gustavo.teste.getmore.getmoredesafio;

import com.gustavo.teste.getmore.getmoredesafio.model.Loja;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface LojaService {

    @GET("stores")
    Call<ArrayList<Loja>> getListaLojas();

    @GET("stores/{id}")
    Call<Loja> getLojaById(@Path("id") int id);

}
