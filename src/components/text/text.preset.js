import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.bold,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: typography.bold,
  fontSize: 16,
  color: colors.white,
};

const NORMAL = {
  fontFamily: typography.regular,
  color: colors.white,
};

export const presets = {
  default: BASE,
  normal: NORMAL,
  h1: {
    ...NORMAL,
    fontSize: 28,
    fontWeight: "bold",
  },
  h2: {
    ...NORMAL,
    fontSize: 24,
    fontWeight: "bold",
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 20,
    fontWeight: "bold",
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 18,
    fontWeight: "bold",
  },
  h5: {
    ...BASE,
    fontSize: 16,
  },
  h6: {
    ...BASE,
    fontSize: 14,
    fontFamily: "normal",
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
