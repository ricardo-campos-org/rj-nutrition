package com.campos.nutrition.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.campos.nutrition.dto.ItemCreateDto;
import com.campos.nutrition.entity.ItemEntity;
import com.campos.nutrition.repository.ItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemService {

  private final ItemRepository itemRepository;
  
  public ItemEntity createItem(ItemCreateDto createDto) {
    ItemEntity itemEntity = new ItemEntity();

    itemEntity.setName(createDto.name());
    itemEntity.setEnergyKcal(createDto.energyKcal());
    itemEntity.setProtein(createDto.protein());
    itemEntity.setLipid(0);
    itemEntity.setColesterol(0);
    itemEntity.setCarbohydrate(createDto.carbohydrate());
    itemEntity.setFibre(0);
    itemEntity.setCalcium(0);
    itemEntity.setIron(0);
    itemEntity.setSodium(0);
    itemEntity.setSource(createDto.source());
    itemEntity.setCreatedAt(LocalDateTime.now());

    return itemRepository.save(itemEntity);
  }
}
