import React from 'react'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from '@material-ui/core/styles'
import _merge from 'lodash/merge'
import { ThemeProvider as ScThemeProvider } from 'styled-components'

export const brandColors = {
  klick: '#0343fb',
  consulting: '#993399',
  katalyst: '#009999',
  appliedsciences: '#cf253f',
  ventures: '#3ccb2a',
  careers: '#0343fb',
  group: '#0343fb',
  sensei: '#473762',
}

export const brandStyles = {
  klick: { palette: { primary: brandColors.klick } },
  consulting: { palette: { primary: brandColors.consulting } },
  katalyst: { palette: { primary: brandColors.katalyst } },
  appliedsciences: { palette: { primary: brandColors.appliedsciences } },
  ventures: { palette: { primary: brandColors.ventures } },
  careers: { palette: { primary: brandColors.careers } },
}

const getThemeBaseline = () => ({
  defaults: {
    spacing: {
      small: { xs: 4, md: 6, lg: 8 },
      medium: { xs: 8, md: 8, lg: 14 },
      large: { xs: 8, md: 16, lg: 28 },
    },
  },
  palette: {
    fpo: {
      main: '#ff00bc',
    },
    background: {
      off: '#f6f6f6',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h1: {
      fontSize: '8.4rem',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
      marginBottom: '0.3em',
    },
    h2: {
      fontSize: '4.5652rem',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
      marginBottom: '0.6em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '3.7003rem',
      lineHeight: 1.1666,
      letterSpacing: '0em',
      marginBottom: '0.6666em',
    },
    h4: {
      fontSize: '2.8354rem',
      fontWeight: 700,
      lineHeight: 1.2333,
      letterSpacing: '0em',
      marginBottom: '0.7333em',
    },
    h5: {
      fontSize: '1.9706rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '0em',
      marginBottom: '0.8em',
    },
    h6: {
      fontSize: '1.1057rem',
      fontWeight: 700,
      lineHeight: 1.3666,
      letterSpacing: '0rem',
      marginBottom: '0.8666em',
    },
    subtitle1: {
      fontWeight: '700',
      fontSize: '1.5rem',
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    subtitle2: {
      fontWeight: '700',
      fontSize: '1.3rem',
      lineHeight: '1.334',
      letterSpacing: '0em',
    },
  },
  shape: {
    borderRadius: 0,
  },
})

const xsStyles = {
  h1: {
    fontSize: '3rem',
  },
  h2: {
    fontSize: '2.4884rem',
  },
  h3: {
    fontSize: '2.0989rem',
  },
  h4: {
    fontSize: '1.7095rem',
  },
  h5: {
    fontSize: '1.32rem',
  },
  h6: {
    fontSize: '0.9305rem',
  },
}

const getOnWhiteThemeOverrides = (brandStyle) => ({
  palette: {
    primary: {
      main: brandStyle.palette.primary,
    },
    secondary: {
      main: '#000',
    },
    text: { primary: '#000000' },
    dotFill: brandStyle.palette.primary,
    background: { default: '#ffffff' },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#000',
      },
      arrow: {
        color: '#000',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#f6f5f5',
      },
    },
  },
})

const getOnBlackThemeOverrides = (brandStyle) => ({
  palette: {
    type: 'dark',
    primary: {
      main: brandStyle.palette.primary,
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
    },
    dotFill: brandStyle.palette.primary,
    background: { default: '#000000' },
  },
})

const getOnPrimaryThemeOverrides = (brandStyle) => ({
  palette: {
    type: 'dark',
    primary: { main: '#000' },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
    },
    dotFill: '#ffffff',
    background: {
      default: brandStyle.palette.primary,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        '&$disabled': {
          color: 'rgba(0, 0, 255, 0.75)',
        },
      },
      label: {
        minWidth: '0',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#fff',
        '&$focused, &$error': {
          color: '#fff',
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
      },
      input: {
        color: '#fff',
      },
    },
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
        '&$focused $notchedOutline': {
          borderColor: '#fff',
        },
        '&$error $notchedOutline': {
          borderColor: '#f44336',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        '&$error': {
          color: '#fff',
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: 'rgba(0, 0, 0, 0.34)',
      },
    },
    MuiListItem: {
      root: {
        color: '#fff',
      },
    },
  },
})

const getTheme = ({
  baseTheme,
  brandName,
  themeType,
  themeOverrides,
  brandOverrides,
}) => {
  const theme = responsiveFontSizes(
    createMuiTheme(
      _merge({}, baseTheme, { brandName, themeType }, themeOverrides, {
        overrides: brandOverrides,
      })
    ),
    { factor: 3, disableAlign: true }
  )
  const xsOverideTheme = _merge({}, theme, { typography: xsStyles })

  return xsOverideTheme
}

const getThemes = () =>
  Object.keys(brandStyles).reduce((acc, cur) => {
    const brandStyle = brandStyles[cur]
    const brandName = cur
    const baseTheme = getThemeBaseline()
    const onWhite = getTheme({
      baseTheme,
      brandName,
      themeType: 'onWhite',
      themeOverrides: getOnWhiteThemeOverrides(brandStyle),
      brandOverrides: brandStyle?.themeOverrides?.OnWhite,
    })
    const onBlack = getTheme({
      baseTheme,
      brandName,
      themeType: 'onBlack',
      themeOverrides: getOnBlackThemeOverrides(brandStyle),
      brandOverrides: brandStyle?.themeOverrides?.OnBlack,
    })
    const onPrimary = getTheme({
      baseTheme,
      brandName,
      themeType: 'onPrimary',
      themeOverrides: getOnPrimaryThemeOverrides(brandStyle),
      brandOverrides: brandStyle?.themeOverrides?.onPrimary,
    })
    const curItem = {
      [cur]: {
        onWhite,
        onBlack,
        onPrimary,
      },
    }
    return { ...acc, ...curItem }
  }, {})

export const themes = getThemes()

const klickOnWhite = themes['klick'].onWhite

const ThemeProvider = ({
  brandName,
  themeType = 'onWhite',
  theme,
  children,
}) => {
  const parentTheme = useTheme()
  const curBrandName = brandName || parentTheme.brandName || 'klick'
  const curTheme = theme || themes[curBrandName][themeType]

  return (
    <MuiThemeProvider theme={curTheme}>
      <ScThemeProvider theme={curTheme}>{children}</ScThemeProvider>
    </MuiThemeProvider>
  )
}

export const match = {
  isPortrait: '(orientation: portrait)',
  isLandscape: '(orientation: landscape)',
  isXS: klickOnWhite.breakpoints.down('xs'),
  isSM: klickOnWhite.breakpoints.up('sm'),
  isMD: klickOnWhite.breakpoints.up('md'),
  isLG: klickOnWhite.breakpoints.up('lg'),
  isXL: klickOnWhite.breakpoints.up('xl'),
  isRetina: `(min-resolution: 2dppx)`,
  crawlerList:
    '(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)',
  getQuery: (query) => match[query].replace('@media ', ''),
}

export default ThemeProvider
