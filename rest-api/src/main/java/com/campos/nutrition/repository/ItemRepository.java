package com.campos.nutrition.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.campos.nutrition.entity.ItemEntity;

public interface ItemRepository extends JpaRepository<ItemEntity, Long> {
  
}
