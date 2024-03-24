/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/radio/search/title": {
    /** Gives results for titles */
    get: operations["TitleSearch"];
  };
  "/radio/search/title/suggest": {
    /** Gives suggestion for misspelling on titles only */
    get: operations["TitleSuggestSearch"];
  };
  "/radio/search/suggest": {
    /** Deprecated. Use '/radio/search/title/suggest'. Gives suggestion for misspelling */
    get: operations["TitleSuggestSearchDeprecated"];
  };
  "/radio/search/search": {
    /** Search endpoint for all content */
    get: operations["Search"];
  };
  "/radio/search/search/suggest": {
    /** Gives suggestion for misspelling */
    get: operations["RadioSuggestSearch"];
  };
  "/radio/search/categories/{category}": {
    /** Alphabetical listing of all series, podcasts and umbrella seasons that are not excluded from search results in given category. Categories correspond to those in pages-api, including 'alt-innhold'. For the category 'podcast', all podcasts are listed, also those excluded from search results. */
    get: operations["RadioListAllForCategory"];
  };
  "/radio/search/int/search": {
    /** Search endpoint for `internal use only`. Searches series and episodes. */
    get: operations["InternalSearch"];
  };
}

export interface components {
  schemas: {
    /** Series search result */
    seriessearchintresult: {
      id: string;
      /** @description If type is `customSeason` */
      seasonId?: string;
      /** @enum {string} */
      type: "series" | "podcast" | "customSeason";
      title: string;
      description?: string;
      trimmedDescription?: string;
      images?: components["schemas"]["image"][];
    } & {
      seriesId: unknown;
    };
    /** Episode search result */
    episodesearchintresult: {
      id: string;
      seriesId: string;
      /** @description If type is `customSeasonEpisode` */
      seasonId?: string;
      /** @enum {string} */
      type:
        | "seriesEpisode"
        | "podcastEpisode"
        | "singleProgram"
        | "customSeasonEpisode";
      title: string;
      subtitle?: string;
      trimmedSubtitle?: string;
      description?: string;
      trimmedDescription?: string;
      images?: components["schemas"]["image"][];
      /**
       * Format: date
       * @description Date in UTC
       */
      date?: string;
    };
    searchresult: {
      /** @description Gives the total count of hits */
      count: number;
      takeCount: components["schemas"]["searchTakeCount"];
      totalCount: components["schemas"]["searchTotalCount"];
      results: {
        channels?: components["schemas"]["channelResult"];
        categories?: components["schemas"]["categoryResult"];
        series?: components["schemas"]["seriesResult"];
        episodes?: components["schemas"]["episodeResult"];
        isSuggestResult?: boolean;
        /** @description if `isSuggestResult` is true, `suggestQuery` displays the suggested value which is used in the current result set */
        suggestQuery?: string;
      };
    } & {
      isSuggestResult: unknown;
    };
    /**
     * Channel result
     * @description Radio channels
     */
    channelResult: {
      links?: components["schemas"]["nextLink"];
      results?: {
        /** @description the radio channel id */
        id: string;
        /** @enum {string} */
        type: "channel";
        title: string;
        images: components["schemas"]["image"][];
        images_1_1?: components["schemas"]["image"][];
        highlights?: components["schemas"]["titleHighlight"];
      }[];
    };
    /**
     * Category results
     * @description Categories that should redirect to a category page
     */
    categoryResult: {
      links?: components["schemas"]["nextLink"];
      results?: {
        /** @description the category id */
        id: string;
        /** @enum {string} */
        type: "category";
        title: string;
        images: components["schemas"]["image"][];
        images_1_1?: components["schemas"]["image"][];
        highlights?: components["schemas"]["titleHighlight"];
      }[];
    };
    /**
     * Series results
     * @description ODM series, podcast series, custom podcast seasons
     */
    seriesResult: {
      links?: components["schemas"]["nextLink"];
      results?: {
        /** @description Unique id */
        id: string;
        seriesId: string;
        /** @description Only included in type `customSeason` */
        seasonId?: string;
        /** @enum {string} */
        type: "series" | "podcast" | "customSeason";
        title: string;
        /** @description Only included in type `customSeason` */
        mainTitle?: string;
        images: components["schemas"]["image"][];
        images_1_1?: components["schemas"]["image"][];
        highlights?: components["schemas"]["seriesHighlight"];
      }[];
    };
    /**
     * Episode results
     * @description ODM series episodes, podcast series episodes, single programs, custom podcast seasons episodes
     */
    episodeResult: {
      links?: components["schemas"]["nextLink"];
      results?: {
        /** @description Unique id */
        id: string;
        episodeId: string;
        /** @description Not included in type `singleProgram` */
        seriesId?: string;
        /** @description Only included in type `customSeasonEpisode` */
        seasonId?: string;
        /** @enum {string} */
        type:
          | "seriesEpisode"
          | "podcastEpisode"
          | "customSeasonEpisode"
          | "singleProgram";
        title: string;
        /** @description Not included in type `singleProgram` */
        seriesTitle?: string;
        images: components["schemas"]["image"][];
        images_1_1?: components["schemas"]["image"][];
        /** Format: date */
        date: string;
        highlights?: components["schemas"]["episodeHighlight"];
      }[];
    };
    nextLink: {
      /**
       * Format: url
       * @description If available, the `next` links retrieves more results for the given section
       */
      next?: string;
    };
    episodeHighlight: {
      /** @enum {string} */
      field?: "title";
      /** @description The highlighted text. `{` marks the start of the highlight, `}` marks the end of the highlight */
      text?: string;
    };
    seriesHighlight: {
      /** @enum {string} */
      field?: "title" | "contributor";
      /** @description The highlighted text. `{` marks the start of the highlight, `}` marks the end of the highlight */
      text?: string;
    };
    titleHighlight: {
      /** @enum {string} */
      field?: "title";
      /** @description The highlighted text. `{` marks the start of the highlight, `}` marks the end of the highlight */
      text?: string;
    };
    /** @description Gives the count for the current result scope */
    searchTakeCount: {
      all: number;
      series: number;
      episodes: number;
      categories: number;
      channels: number;
    };
    /** @description Gives the count for the total matching set of results in the index. */
    searchTotalCount: {
      all: number;
      series: number;
      episodes: number;
      categories: number;
      channels: number;
    };
    titlesearchresult: {
      /** @description Gives the total count of hits for pagination */
      count?: number;
      takeCount?: components["schemas"]["takeCount"];
      totalCount?: components["schemas"]["totalCount"];
      results?: components["schemas"]["resultobject"][];
    };
    resultobject: {
      /** @description A hashed unique value for the result item */
      id?: string;
      /** @description Id of the series */
      seriesId?: string;
      /** @description Id of the episode */
      episodeId?: string;
      /**
       * @description `customSeason` and `customSeasonEpisode` are included in `V2` for this endpoint
       * @enum {string}
       */
      type?:
        | "podcast"
        | "series"
        | "podcastEpisode"
        | "seriesEpisode"
        | "singleProgram"
        | "customSeason"
        | "customSeasonEpisode";
      /** @description series title */
      seriesTitle?: string;
      /** @description Episode title */
      episodeTitle?: string;
      /** @description The series description */
      seriesDescription?: string;
      /** @description The episode description */
      episodeDescription?: string;
      images?: components["schemas"]["image"][];
      /** @description First transmission date for episodes */
      firstTransmissionDate?: string;
      /** @description Latest transmission date for episodes */
      lastTransmissionDate?: string;
      /** @description Indicates if the episode is available on CDN and playable. */
      playbackAvailable?: boolean;
    };
    /** @description Gives the count for the current result scope */
    takeCount: {
      all?: number;
      series?: number;
      episodes?: number;
    };
    /** @description Gives the count for the total matching set of results in the index. */
    totalCount: {
      all?: number;
      series?: number;
      episodes?: number;
    };
    image: {
      /**
       * @description The image uri
       * @example https://gfx.nrk.no/bGUIqql3v_BzrJBHxGnQHwxeHk-T5QHVJpOLdq5zsUFQ.jpg
       */
      uri?: string;
      /**
       * @description The image width
       * @example 300
       */
      width?: number;
    };
    /** @description Describe link to other resource */
    halLink: {
      /** @description the link */
      href: string;
      /** @description Is href a template string. */
      templated?: boolean;
    };
    /** @description Only the link corresponding to the seriesListItem type is set */
    seriesListItemLinks: {
      series?: components["schemas"]["halLink"];
      podcast?: components["schemas"]["halLink"];
      customSeason?: components["schemas"]["halLink"];
      singleProgram?: components["schemas"]["halLink"];
    };
    serieslistitem: {
      _links: components["schemas"]["seriesListItemLinks"];
      id: string;
      /** @enum {string} */
      type: "series" | "podcast" | "singleProgram" | "customSeason";
      /** @description Id for series or podcast. Not set for singleProgram */
      seriesId?: string;
      /** @description Id for season. Only set for customSeason */
      seasonId?: string;
      title: string;
      /** @description First character in title. # is used for titles starting on numerals */
      initialCharacter: string;
      images: components["schemas"]["image"][];
    };
    letterlistitem: {
      /** @description List of all initialCharacters for series/podcasts/seasons in category. Current page might not include all letters listed here */
      letter: string;
      /** @description Number of items for letter */
      count: number;
      /** @description Link to paginated page starting at letter */
      link: string;
    };
    categoriesLinks: {
      nextPage?: components["schemas"]["halLink"];
      prevPage?: components["schemas"]["halLink"];
      nextLetter?: components["schemas"]["halLink"];
      prevLetter?: components["schemas"]["halLink"];
    };
    categoriesResponse: {
      _links: components["schemas"]["categoriesLinks"];
      letters: components["schemas"]["letterlistitem"][];
      /** @description Title of category */
      title: string;
      series: components["schemas"]["serieslistitem"][];
      /** @description Total number of items for category and letter if set */
      totalCount: number;
    };
  };
}

export interface operations {
  /** Gives results for titles */
  TitleSearch: {
    parameters: {
      header: {
        accept?: "application/json;api-version=2";
      };
      query: {
        /** The query text */
        q: string;
        /** Number of results to take */
        take?: number;
        /** Number of results to skip */
        skip?: number;
        /** Filters only playable content */
        filterNotPlayable?: boolean;
        /** Returns only the specified type */
        type?: "series" | "episode";
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["titlesearchresult"];
        };
      };
    };
  };
  /** Gives suggestion for misspelling on titles only */
  TitleSuggestSearch: {
    parameters: {
      query: {
        /** The query text */
        q: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string[];
        };
      };
    };
  };
  /** Deprecated. Use '/radio/search/title/suggest'. Gives suggestion for misspelling */
  TitleSuggestSearchDeprecated: {
    parameters: {
      query: {
        /** The query text */
        q: string;
        /** Defaults to 10 if not set */
        take?: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string[];
        };
      };
    };
  };
  /** Search endpoint for all content */
  Search: {
    parameters: {
      query: {
        /** The query text */
        q: string;
        /** Number of results to take per type in the result set (see type parameter) */
        take?: number;
        /** Number of results to skip */
        skip?: number;
        /** Which page of results to get */
        page?: number;
        /** Filters only playable content, applies to `episodes` and `series` */
        filterNotPlayable?: boolean;
        /** Returns only the specified type */
        type?: "series" | "episode" | "channel" | "category";
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["searchresult"];
        };
      };
    };
  };
  /** Gives suggestion for misspelling */
  RadioSuggestSearch: {
    parameters: {
      query: {
        /** The query text */
        q: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string[];
        };
      };
    };
  };
  /** Alphabetical listing of all series, podcasts and umbrella seasons that are not excluded from search results in given category. Categories correspond to those in pages-api, including 'alt-innhold'. For the category 'podcast', all podcasts are listed, also those excluded from search results. */
  RadioListAllForCategory: {
    parameters: {
      path: {
        category: string;
      };
      query: {
        take?: number;
        skip?: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": components["schemas"]["categoriesResponse"];
        };
      };
      /** Category not found */
      404: {
        content: {
          "text/plain": unknown;
        };
      };
    };
  };
  /** Search endpoint for `internal use only`. Searches series and episodes. */
  InternalSearch: {
    parameters: {
      query: {
        /** The query text */
        q: string;
        /** Defaults to 10 if not set */
        take?: number;
        /** Defaults to `desc` if not set */
        sort?: string;
        /** options `series` or `episode` */
        type?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": (
            | components["schemas"]["episodesearchintresult"]
            | components["schemas"]["seriessearchintresult"]
          )[];
        };
      };
    };
  };
}
