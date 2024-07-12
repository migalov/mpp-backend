import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqBlock extends Schema.Component {
  collectionName: 'components_faq_faq_blocks';
  info: {
    displayName: 'FAQBlock';
  };
  attributes: {
    title: Attribute.String;
    anchor: Attribute.String;
    items: Attribute.Component<'faq.faq-item', true>;
  };
}

export interface FaqFaqItem extends Schema.Component {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQItem';
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
  };
}

export interface HtmlBitrixForm extends Schema.Component {
  collectionName: 'components_html_bitrix_forms';
  info: {
    displayName: 'Bitrix Form';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    script: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface HtmlHtmlBlock extends Schema.Component {
  collectionName: 'components_html_html_blocks';
  info: {
    displayName: 'HTML Block';
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

export interface SeoSeoBlock extends Schema.Component {
  collectionName: 'components_seo_seo_blocks';
  info: {
    displayName: 'SeoBlock';
    description: '';
  };
  attributes: {
    column1: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    column2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface TableBody extends Schema.Component {
  collectionName: 'components_table_bodies';
  info: {
    displayName: 'Body';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    end: Attribute.String;
    color: Attribute.Enumeration<['violet', 'green']>;
  };
}

export interface TableRow extends Schema.Component {
  collectionName: 'components_table_delivery_rows';
  info: {
    displayName: 'Row';
    description: '';
  };
  attributes: {
    city: Attribute.String;
    days: Attribute.String;
    price: Attribute.Integer;
  };
}

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    body: Attribute.Component<'table.body'>;
    rows: Attribute.Component<'table.row', true>;
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    src: Attribute.String;
    url: Attribute.String;
    price: Attribute.Integer;
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

export interface UiElementsIFrame extends Schema.Component {
  collectionName: 'components_ui_elements_i_frames';
  info: {
    displayName: 'IFrame';
  };
  attributes: {
    src: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface UiElementsStepItem extends Schema.Component {
  collectionName: 'components_ui_elements_step_items';
  info: {
    displayName: 'StepItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    color: Attribute.Enumeration<['green', 'gray', 'violet', 'orange']>;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
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
    srcMobile: Attribute.String;
    srcDesktop: Attribute.String;
    bgColor: Attribute.Enumeration<['orange', 'green', 'violet']>;
    price: Attribute.Integer;
  };
}

export interface UiSliderGallery extends Schema.Component {
  collectionName: 'components_ui_slider_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Component<'ui-slider.image', true>;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
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
      'faq.faq-block': FaqFaqBlock;
      'faq.faq-item': FaqFaqItem;
      'html.bitrix-form': HtmlBitrixForm;
      'html.html-block': HtmlHtmlBlock;
      'seo.seo-block': SeoSeoBlock;
      'table.body': TableBody;
      'table.row': TableRow;
      'table.table': TableTable;
      'ui-elements.button': UiElementsButton;
      'ui-elements.categories-block': UiElementsCategoriesBlock;
      'ui-elements.category-item': UiElementsCategoryItem;
      'ui-elements.feature-item': UiElementsFeatureItem;
      'ui-elements.features-block': UiElementsFeaturesBlock;
      'ui-elements.i-frame': UiElementsIFrame;
      'ui-elements.step-item': UiElementsStepItem;
      'ui-elements.steps-block': UiElementsStepsBlock;
      'ui-slider.banner': UiSliderBanner;
      'ui-slider.gallery': UiSliderGallery;
      'ui-slider.image': UiSliderImage;
      'ui-slider.slider': UiSliderSlider;
    }
  }
}
