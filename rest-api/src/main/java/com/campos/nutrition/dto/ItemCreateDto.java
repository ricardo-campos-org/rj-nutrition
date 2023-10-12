package com.campos.nutrition.dto;

import jakarta.validation.constraints.NotNull;

public record ItemCreateDto(
  @NotNull String name,
  @NotNull Integer energyKcal,
  @NotNull Integer protein,
  @NotNull Integer carbohydrate,
  @NotNull String source
) {}
