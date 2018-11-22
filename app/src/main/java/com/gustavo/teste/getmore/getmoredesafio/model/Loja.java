package com.gustavo.teste.getmore.getmoredesafio.model;

import java.io.Serializable;

public class Loja implements Serializable {
    int id;
    String name;
    double takeback;
    float rating;
    String url;
    String image_blob;
    String[] category;

    public String[] getCategory() {
        return category;
    }

    public void setCategory(String[] category) {
        this.category = category;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getTakeback() {
        return takeback;
    }

    public void setTakeback(double takeback) {
        this.takeback = takeback;
    }

    public String getImage_blob() {
        return image_blob;
    }

    public void setImage_blob(String image_blob) {
        this.image_blob = image_blob;
    }
}
