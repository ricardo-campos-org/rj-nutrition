package com.campos.nutrition.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "item")
public class ItemEntity {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(length = 30, nullable = false)
  private String name;

  @Column(name = "energy_kcal", nullable = false)
  private Integer energyKcal;

  @Column(nullable = false)
  private Integer protein;

  @Column(nullable = false)
  private Integer lipid;

  @Column(nullable = false)
  private Integer colesterol;

  @Column(nullable = false)
  private Integer carbohydrate;

  @Column(nullable = false)
  private Integer fibre;

  @Column(nullable = false)
  private Integer calcium;

  @Column(nullable = false)
  private Integer iron;

  @Column(nullable = false)
  private Integer sodium;

  @Column(length = 20, nullable = false)
  private String source;

  @Column(name = "created_at", nullable = false)
  private LocalDateTime createdAt;

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;
}
