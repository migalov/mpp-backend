import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoBlock extends Schema.Component {
  collectionName: 'components_seo_seo_blocks';
  info: {
    displayName: 'SeoBlock';
  };
  attributes: {
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface UiElementsButton extends Schema.Component {
  collectionName: 'components_ui_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface UiElementsCategoriesBlock extends Schema.Component {
  collectionName: 'components_ui_elements_categories_blocks';
  info: {
    displayName: 'CategoriesBlock';
  };
  attributes: {
    title: Attribute.String;
    categories: Attribute.Component<'ui-elements.category-item', true>;
  };
}

export interface UiElementsCategoryItem extends Schema.Component {
  collectionName: 'components_ui_elements_category_items';
  info: {
    displayName: 'CategoryItem';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.String;
    src: Attribute.String;
    url: Attribute.String;
  };
}

export interface UiElementsFeatureItem extends Schema.Component {
  collectionName: 'components_ui_elements_feature_items';
  info: {
    displayName: 'FeatureItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    src: Attribute.String;
  };
}

export interface UiElementsFeaturesBlock extends Schema.Component {
  collectionName: 'components_ui_elements_features_blocks';
  info: {
    displayName: 'FeaturesBlock';
  };
  attributes: {
    title: Attribute.String;
    features: Attribute.Component<'ui-elements.feature-item', true>;
  };
}

export interface UiElementsStepItem extends Schema.Component {
  collectionName: 'components_ui_elements_step_items';
  info: {
    displayName: 'StepItem';
  };
  attributes: {
    title: Attribute.String;
    color: Attribute.Enumeration<['green', 'gray', 'violet', 'orange']>;
  };
}

export interface UiElementsStepsBlock extends Schema.Component {
  collectionName: 'components_ui_elements_steps_blocks';
  info: {
    displayName: 'StepsBlock';
  };
  attributes: {
    title: Attribute.String;
    steps: Attribute.Component<'ui-elements.step-item', true>;
  };
}

export interface UiSliderBanner extends Schema.Component {
  collectionName: 'components_ui_slider_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    src: Attribute.String;
    buttonLabel: Attribute.String;
    buttonURL: Attribute.String;
    testImage: Attribute.Media<'images'>;
  };
}

export interface UiSliderGallery extends Schema.Component {
  collectionName: 'components_ui_slider_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Component<'ui-slider.image', true>;
  };
}

export interface UiSliderImage extends Schema.Component {
  collectionName: 'components_ui_slider_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    src: Attribute.String;
  };
}

export interface UiSliderSlider extends Schema.Component {
  collectionName: 'components_ui_slider_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    banners: Attribute.Component<'ui-slider.banner', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-block': SeoSeoBlock;
      'ui-elements.button': UiElementsButton;
      'ui-elements.categories-block': UiElementsCategoriesBlock;
      'ui-elements.category-item': UiElementsCategoryItem;
      'ui-elements.feature-item': UiElementsFeatureItem;
      'ui-elements.features-block': UiElementsFeaturesBlock;
      'ui-elements.step-item': UiElementsStepItem;
      'ui-elements.steps-block': UiElementsStepsBlock;
      'ui-slider.banner': UiSliderBanner;
      'ui-slider.gallery': UiSliderGallery;
      'ui-slider.image': UiSliderImage;
      'ui-slider.slider': UiSliderSlider;
    }
  }
}
