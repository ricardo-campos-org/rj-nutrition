package com.campos.nutrition.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campos.nutrition.dto.ItemCreateDto;
import com.campos.nutrition.entity.ItemEntity;
import com.campos.nutrition.service.ItemService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Valid
@RestController
@RequestMapping(path = "/api/items", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class ItemController {

  private final ItemService itemService;
  
  // save itens
  @PostMapping
  public ResponseEntity<ItemEntity> createItem(@RequestBody ItemCreateDto createDto) {
    ItemEntity entity = itemService.createItem(createDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(entity);
  }
}
