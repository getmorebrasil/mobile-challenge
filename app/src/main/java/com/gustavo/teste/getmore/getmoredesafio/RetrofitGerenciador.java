package com.gustavo.teste.getmore.getmoredesafio;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitGerenciador {

    Retrofit retrofit;

    public RetrofitGerenciador() {

        retrofit = new Retrofit.Builder()
                .baseUrl("http://challenge.getmore.com.br/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();


    }

    public LojaService getLojaService() {
        return retrofit.create(LojaService.class);
    }

}
