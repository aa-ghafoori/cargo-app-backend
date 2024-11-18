import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    testimonies: Schema.Attribute.Component<'elements.testimony', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutTeam extends Struct.ComponentSchema {
  collectionName: 'components_layout_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    teamMembers: Schema.Attribute.Component<'layout.team-member', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_layout_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    address: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutStats extends Struct.ComponentSchema {
  collectionName: 'components_layout_stats';
  info: {
    displayName: 'Stats';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'elements.info', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_layout_logo_clouds';
  info: {
    displayName: 'Logo Cloud';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface LayoutHero3 extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero3s';
  info: {
    displayName: 'Hero3';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    buttonLinks: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutHero2 extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero2s';
  info: {
    displayName: 'Hero2';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    buttonLinks: Schema.Attribute.Component<'elements.link', true>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    buttonLinks: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'elements.logo-link', false> &
      Schema.Attribute.Required;
    navItems: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    buttonLink: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    navItems: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    copyRight: Schema.Attribute.String & Schema.Attribute.Required;
    socialLinks: Schema.Attribute.Component<'elements.logo-link', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFeatures4 extends Struct.ComponentSchema {
  collectionName: 'components_layout_features4s';
  info: {
    displayName: 'Features4';
  };
  attributes: {
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.feature', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LayoutFeatures3 extends Struct.ComponentSchema {
  collectionName: 'components_layout_features3s';
  info: {
    displayName: 'Features3';
  };
  attributes: {
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.feature', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LayoutFeatures2 extends Struct.ComponentSchema {
  collectionName: 'components_layout_features2s';
  info: {
    displayName: 'Features2';
  };
  attributes: {
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.feature', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.feature', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFaq extends Struct.ComponentSchema {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
  };
}

export interface LayoutDetailedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_detailed_features';
  info: {
    displayName: 'Detailed Features';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    info: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'elements.feature', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutContent2 extends Struct.ComponentSchema {
  collectionName: 'components_layout_content2s';
  info: {
    displayName: 'Content2';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<'elements.info', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutContent extends Struct.ComponentSchema {
  collectionName: 'components_layout_contents';
  info: {
    displayName: 'Content';
    description: '';
  };
  attributes: {
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph1: Schema.Attribute.Text & Schema.Attribute.Required;
    buttonLink: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    paragraph2: Schema.Attribute.Text & Schema.Attribute.Required;
    paragraph3: Schema.Attribute.Text & Schema.Attribute.Required;
    paragraph4: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_layout_call_to_actions';
  info: {
    displayName: 'Call to Action';
    description: '';
  };
  attributes: {
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    buttonLinks: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutBlog extends Struct.ComponentSchema {
  collectionName: 'components_layout_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    coverImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsTestimony extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonies';
  info: {
    displayName: 'Testimony';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsReceiver extends Struct.ComponentSchema {
  collectionName: 'components_elements_receivers';
  info: {
    displayName: 'Person';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    zipCode: Schema.Attribute.Integer;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsDimension extends Struct.ComponentSchema {
  collectionName: 'components_elements_dimensions';
  info: {
    displayName: 'Dimension';
  };
  attributes: {
    length: Schema.Attribute.Decimal & Schema.Attribute.Required;
    height: Schema.Attribute.Decimal & Schema.Attribute.Required;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.testimonials': LayoutTestimonials;
      'layout.team': LayoutTeam;
      'layout.team-member': LayoutTeamMember;
      'layout.stats': LayoutStats;
      'layout.logo-cloud': LayoutLogoCloud;
      'layout.hero3': LayoutHero3;
      'layout.hero2': LayoutHero2;
      'layout.hero': LayoutHero;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'layout.features4': LayoutFeatures4;
      'layout.features3': LayoutFeatures3;
      'layout.features2': LayoutFeatures2;
      'layout.features': LayoutFeatures;
      'layout.faq': LayoutFaq;
      'layout.detailed-features': LayoutDetailedFeatures;
      'layout.content2': LayoutContent2;
      'layout.content': LayoutContent;
      'layout.call-to-action': LayoutCallToAction;
      'layout.blog': LayoutBlog;
      'elements.testimony': ElementsTestimony;
      'elements.receiver': ElementsReceiver;
      'elements.logo-link': ElementsLogoLink;
      'elements.link': ElementsLink;
      'elements.info': ElementsInfo;
      'elements.feature': ElementsFeature;
      'elements.dimension': ElementsDimension;
    }
  }
}
