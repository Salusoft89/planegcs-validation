import y from "yup";

export type SketchGeometryProperty = y.InferType<typeof SketchGeometryProperty>;
export const SketchGeometryProperty = y
  .mixed()
  .oneOf(["x", "y", "radius", "start_angle", "end_angle", "radmin"])
  .required();

export type oid = y.InferType<typeof oid>;
export const oid = y.string().required();

export type Id = y.InferType<typeof Id>;
export const Id = y.object({
  id: oid,
});

export type ObjectParam = y.InferType<typeof ObjectParam>;
export const ObjectParam = y.object({
  o_id: oid,
  prop: SketchGeometryProperty,
});

export type InternalAlignmentType = y.InferType<typeof InternalAlignmentType>;
export const InternalAlignmentType = y
  .mixed()
  .oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
  .required();

export type Constraint_Alignment = y.InferType<typeof Constraint_Alignment>;
export const Constraint_Alignment = y.mixed().oneOf([0, 1]).required();

export type Equal = y.InferType<typeof Equal>;
export const Equal = y.object({
  id: oid,
  type: y.mixed((value): value is "equal" => value === "equal").required(),
  param1: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  param2: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  internalalignment: y.mixed().oneOf([0, 1]).required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Proportional = y.InferType<typeof Proportional>;
export const Proportional = y.object({
  id: oid,
  type: y
    .mixed((value): value is "proportional" => value === "proportional")
    .required(),
  param1: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  param2: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  ratio: y.number().required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Difference = y.InferType<typeof Difference>;
export const Difference = y.object({
  id: oid,
  type: y
    .mixed((value): value is "difference" => value === "difference")
    .required(),
  param1: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  param2: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  difference: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2PDistance = y.InferType<typeof P2PDistance>;
export const P2PDistance = y.object({
  id: oid,
  type: y
    .mixed((value): value is "p2p_distance" => value === "p2p_distance")
    .required(),
  p1_id: oid,
  p2_id: oid,
  distance: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2PAngle_INCR_ANGLE = y.InferType<typeof P2PAngle_INCR_ANGLE>;
export const P2PAngle_INCR_ANGLE = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "p2p_angle_incr_angle" =>
        value === "p2p_angle_incr_angle",
    )
    .required(),
  p1_id: oid,
  p2_id: oid,
  angle: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  incrAngle: y.number().required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2PAngle = y.InferType<typeof P2PAngle>;
export const P2PAngle = y.object({
  id: oid,
  type: y
    .mixed((value): value is "p2p_angle" => value === "p2p_angle")
    .required(),
  p1_id: oid,
  p2_id: oid,
  angle: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2LDistance = y.InferType<typeof P2LDistance>;
export const P2LDistance = y.object({
  id: oid,
  type: y
    .mixed((value): value is "p2l_distance" => value === "p2l_distance")
    .required(),
  p_id: oid,
  l_id: oid,
  distance: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnLine_PL = y.InferType<typeof PointOnLine_PL>;
export const PointOnLine_PL = y.object({
  id: oid,
  type: y
    .mixed((value): value is "point_on_line_pl" => value === "point_on_line_pl")
    .required(),
  p_id: oid,
  l_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnLine_PPP = y.InferType<typeof PointOnLine_PPP>;
export const PointOnLine_PPP = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "point_on_line_ppp" => value === "point_on_line_ppp",
    )
    .required(),
  p_id: oid,
  lp1_id: oid,
  lp2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnPerpBisector_PL = y.InferType<typeof PointOnPerpBisector_PL>;
export const PointOnPerpBisector_PL = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "point_on_perp_bisector_pl" =>
        value === "point_on_perp_bisector_pl",
    )
    .required(),
  p_id: oid,
  l_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnPerpBisector_PPP = y.InferType<
  typeof PointOnPerpBisector_PPP
>;
export const PointOnPerpBisector_PPP = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "point_on_perp_bisector_ppp" =>
        value === "point_on_perp_bisector_ppp",
    )
    .required(),
  p_id: oid,
  lp1_id: oid,
  lp2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Parallel = y.InferType<typeof Parallel>;
export const Parallel = y.object({
  id: oid,
  type: y
    .mixed((value): value is "parallel" => value === "parallel")
    .required(),
  l1_id: oid,
  l2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Perpendicular_LL = y.InferType<typeof Perpendicular_LL>;
export const Perpendicular_LL = y.object({
  id: oid,
  type: y
    .mixed((value): value is "perpendicular_ll" => value === "perpendicular_ll")
    .required(),
  l1_id: oid,
  l2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Perpendicular_PPPP = y.InferType<typeof Perpendicular_PPPP>;
export const Perpendicular_PPPP = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "perpendicular_pppp" => value === "perpendicular_pppp",
    )
    .required(),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type L2LAngle_LL = y.InferType<typeof L2LAngle_LL>;
export const L2LAngle_LL = y.object({
  id: oid,
  type: y
    .mixed((value): value is "l2l_angle_ll" => value === "l2l_angle_ll")
    .required(),
  l1_id: oid,
  l2_id: oid,
  angle: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type L2LAngle_PPPP = y.InferType<typeof L2LAngle_PPPP>;
export const L2LAngle_PPPP = y.object({
  id: oid,
  type: y
    .mixed((value): value is "l2l_angle_pppp" => value === "l2l_angle_pppp")
    .required(),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  angle: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type AngleViaPoint = y.InferType<typeof AngleViaPoint>;
export const AngleViaPoint = y.object({
  id: oid,
  type: y
    .mixed((value): value is "angle_via_point" => value === "angle_via_point")
    .required(),
  crv1_id: oid,
  crv2_id: oid,
  p_id: oid,
  angle: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type MidpointOnLine_LL = y.InferType<typeof MidpointOnLine_LL>;
export const MidpointOnLine_LL = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "midpoint_on_line_ll" =>
        value === "midpoint_on_line_ll",
    )
    .required(),
  l1_id: oid,
  l2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type MidpointOnLine_PPPP = y.InferType<typeof MidpointOnLine_PPPP>;
export const MidpointOnLine_PPPP = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "midpoint_on_line_pppp" =>
        value === "midpoint_on_line_pppp",
    )
    .required(),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type TangentCircumf = y.InferType<typeof TangentCircumf>;
export const TangentCircumf = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_circumf" => value === "tangent_circumf")
    .required(),
  p1_id: oid,
  p2_id: oid,
  rd1: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  rd2: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  internal: y.boolean().required().optional(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type TangentAtBSplineKnot = y.InferType<typeof TangentAtBSplineKnot>;
export const TangentAtBSplineKnot = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "tangent_at_bspline_knot" =>
        value === "tangent_at_bspline_knot",
    )
    .required(),
  b_id: oid,
  l_id: oid,
  knotindex: y.number().required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2PCoincident = y.InferType<typeof P2PCoincident>;
export const P2PCoincident = y.object({
  id: oid,
  type: y
    .mixed((value): value is "p2p_coincident" => value === "p2p_coincident")
    .required(),
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Horizontal_L = y.InferType<typeof Horizontal_L>;
export const Horizontal_L = y.object({
  id: oid,
  type: y
    .mixed((value): value is "horizontal_l" => value === "horizontal_l")
    .required(),
  l_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Horizontal_PP = y.InferType<typeof Horizontal_PP>;
export const Horizontal_PP = y.object({
  id: oid,
  type: y
    .mixed((value): value is "horizontal_pp" => value === "horizontal_pp")
    .required(),
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Vertical_L = y.InferType<typeof Vertical_L>;
export const Vertical_L = y.object({
  id: oid,
  type: y
    .mixed((value): value is "vertical_l" => value === "vertical_l")
    .required(),
  l_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Vertical_PP = y.InferType<typeof Vertical_PP>;
export const Vertical_PP = y.object({
  id: oid,
  type: y
    .mixed((value): value is "vertical_pp" => value === "vertical_pp")
    .required(),
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type CoordinateX = y.InferType<typeof CoordinateX>;
export const CoordinateX = y.object({
  id: oid,
  type: y
    .mixed((value): value is "coordinate_x" => value === "coordinate_x")
    .required(),
  p_id: oid,
  x: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type CoordinateY = y.InferType<typeof CoordinateY>;
export const CoordinateY = y.object({
  id: oid,
  type: y
    .mixed((value): value is "coordinate_y" => value === "coordinate_y")
    .required(),
  p_id: oid,
  y: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type ArcRules = y.InferType<typeof ArcRules>;
export const ArcRules = y.object({
  id: oid,
  type: y
    .mixed((value): value is "arc_rules" => value === "arc_rules")
    .required(),
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnCircle = y.InferType<typeof PointOnCircle>;
export const PointOnCircle = y.object({
  id: oid,
  type: y
    .mixed((value): value is "point_on_circle" => value === "point_on_circle")
    .required(),
  p_id: oid,
  c_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnEllipse = y.InferType<typeof PointOnEllipse>;
export const PointOnEllipse = y.object({
  id: oid,
  type: y
    .mixed((value): value is "point_on_ellipse" => value === "point_on_ellipse")
    .required(),
  p_id: oid,
  e_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnHyperbolicArc = y.InferType<typeof PointOnHyperbolicArc>;
export const PointOnHyperbolicArc = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "point_on_hyperbolic_arc" =>
        value === "point_on_hyperbolic_arc",
    )
    .required(),
  p_id: oid,
  e_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnParabolicArc = y.InferType<typeof PointOnParabolicArc>;
export const PointOnParabolicArc = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "point_on_parabolic_arc" =>
        value === "point_on_parabolic_arc",
    )
    .required(),
  p_id: oid,
  e_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnBSpline = y.InferType<typeof PointOnBSpline>;
export const PointOnBSpline = y.object({
  id: oid,
  type: y
    .mixed((value): value is "point_on_bspline" => value === "point_on_bspline")
    .required(),
  p_id: oid,
  b_id: oid,
  pointparam: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type ArcOfEllipseRules = y.InferType<typeof ArcOfEllipseRules>;
export const ArcOfEllipseRules = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "arc_of_ellipse_rules" =>
        value === "arc_of_ellipse_rules",
    )
    .required(),
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type CurveValue = y.InferType<typeof CurveValue>;
export const CurveValue = y.object({
  id: oid,
  type: y
    .mixed((value): value is "curve_value" => value === "curve_value")
    .required(),
  p_id: oid,
  a_id: oid,
  u: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type ArcOfHyperbolaRules = y.InferType<typeof ArcOfHyperbolaRules>;
export const ArcOfHyperbolaRules = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "arc_of_hyperbola_rules" =>
        value === "arc_of_hyperbola_rules",
    )
    .required(),
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type ArcOfParabolaRules = y.InferType<typeof ArcOfParabolaRules>;
export const ArcOfParabolaRules = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "arc_of_parabola_rules" =>
        value === "arc_of_parabola_rules",
    )
    .required(),
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PointOnArc = y.InferType<typeof PointOnArc>;
export const PointOnArc = y.object({
  id: oid,
  type: y
    .mixed((value): value is "point_on_arc" => value === "point_on_arc")
    .required(),
  p_id: oid,
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PerpendicularLine2Arc = y.InferType<typeof PerpendicularLine2Arc>;
export const PerpendicularLine2Arc = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "perpendicular_line2arc" =>
        value === "perpendicular_line2arc",
    )
    .required(),
  p1_id: oid,
  p2_id: oid,
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PerpendicularArc2Line = y.InferType<typeof PerpendicularArc2Line>;
export const PerpendicularArc2Line = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "perpendicular_arc2line" =>
        value === "perpendicular_arc2line",
    )
    .required(),
  a_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PerpendicularCircle2Arc = y.InferType<
  typeof PerpendicularCircle2Arc
>;
export const PerpendicularCircle2Arc = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "perpendicular_circle2arc" =>
        value === "perpendicular_circle2arc",
    )
    .required(),
  center_id: oid,
  radius: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PerpendicularArc2Circle = y.InferType<
  typeof PerpendicularArc2Circle
>;
export const PerpendicularArc2Circle = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "perpendicular_arc2circle" =>
        value === "perpendicular_arc2circle",
    )
    .required(),
  a_id: oid,
  center_id: oid,
  radius: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type PerpendicularArc2Arc = y.InferType<typeof PerpendicularArc2Arc>;
export const PerpendicularArc2Arc = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "perpendicular_arc2arc" =>
        value === "perpendicular_arc2arc",
    )
    .required(),
  a1_id: oid,
  reverse1: y.boolean().required(),
  a2_id: oid,
  reverse2: y.boolean().required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Tangent_LC = y.InferType<typeof Tangent_LC>;
export const Tangent_LC = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_lc" => value === "tangent_lc")
    .required(),
  l_id: oid,
  c_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Tangent_LE = y.InferType<typeof Tangent_LE>;
export const Tangent_LE = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_le" => value === "tangent_le")
    .required(),
  l_id: oid,
  e_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Tangent_LA = y.InferType<typeof Tangent_LA>;
export const Tangent_LA = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_la" => value === "tangent_la")
    .required(),
  l_id: oid,
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Tangent_CC = y.InferType<typeof Tangent_CC>;
export const Tangent_CC = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_cc" => value === "tangent_cc")
    .required(),
  c1_id: oid,
  c2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Tangent_AA = y.InferType<typeof Tangent_AA>;
export const Tangent_AA = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_aa" => value === "tangent_aa")
    .required(),
  a1_id: oid,
  a2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Tangent_CA = y.InferType<typeof Tangent_CA>;
export const Tangent_CA = y.object({
  id: oid,
  type: y
    .mixed((value): value is "tangent_ca" => value === "tangent_ca")
    .required(),
  c_id: oid,
  a_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type CircleRadius = y.InferType<typeof CircleRadius>;
export const CircleRadius = y.object({
  id: oid,
  type: y
    .mixed((value): value is "circle_radius" => value === "circle_radius")
    .required(),
  c_id: oid,
  radius: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type ArcRadius = y.InferType<typeof ArcRadius>;
export const ArcRadius = y.object({
  id: oid,
  type: y
    .mixed((value): value is "arc_radius" => value === "arc_radius")
    .required(),
  a_id: oid,
  radius: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type CircleDiameter = y.InferType<typeof CircleDiameter>;
export const CircleDiameter = y.object({
  id: oid,
  type: y
    .mixed((value): value is "circle_diameter" => value === "circle_diameter")
    .required(),
  c_id: oid,
  diameter: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type ArcDiameter = y.InferType<typeof ArcDiameter>;
export const ArcDiameter = y.object({
  id: oid,
  type: y
    .mixed((value): value is "arc_diameter" => value === "arc_diameter")
    .required(),
  a_id: oid,
  diameter: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualLength = y.InferType<typeof EqualLength>;
export const EqualLength = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_length" => value === "equal_length")
    .required(),
  l1_id: oid,
  l2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualRadius_CC = y.InferType<typeof EqualRadius_CC>;
export const EqualRadius_CC = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_radius_cc" => value === "equal_radius_cc")
    .required(),
  c1_id: oid,
  c2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualRadii_EE = y.InferType<typeof EqualRadii_EE>;
export const EqualRadii_EE = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_radii_ee" => value === "equal_radii_ee")
    .required(),
  e1_id: oid,
  e2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualRadii_AHAH = y.InferType<typeof EqualRadii_AHAH>;
export const EqualRadii_AHAH = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_radii_ahah" => value === "equal_radii_ahah")
    .required(),
  a1_id: oid,
  a2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualRadius_CA = y.InferType<typeof EqualRadius_CA>;
export const EqualRadius_CA = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_radius_ca" => value === "equal_radius_ca")
    .required(),
  c1_id: oid,
  a2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualRadius_AA = y.InferType<typeof EqualRadius_AA>;
export const EqualRadius_AA = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_radius_aa" => value === "equal_radius_aa")
    .required(),
  a1_id: oid,
  a2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type EqualFocus = y.InferType<typeof EqualFocus>;
export const EqualFocus = y.object({
  id: oid,
  type: y
    .mixed((value): value is "equal_focus" => value === "equal_focus")
    .required(),
  a1_id: oid,
  a2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2PSymmetric_PPL = y.InferType<typeof P2PSymmetric_PPL>;
export const P2PSymmetric_PPL = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "p2p_symmetric_ppl" => value === "p2p_symmetric_ppl",
    )
    .required(),
  p1_id: oid,
  p2_id: oid,
  l_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type P2PSymmetric_PPP = y.InferType<typeof P2PSymmetric_PPP>;
export const P2PSymmetric_PPP = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "p2p_symmetric_ppp" => value === "p2p_symmetric_ppp",
    )
    .required(),
  p1_id: oid,
  p2_id: oid,
  p_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type SnellsLaw = y.InferType<typeof SnellsLaw>;
export const SnellsLaw = y.object({
  id: oid,
  type: y
    .mixed((value): value is "snells_law" => value === "snells_law")
    .required(),
  ray1_id: oid,
  ray2_id: oid,
  boundary_id: oid,
  p_id: oid,
  n1: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  n2: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  flipn1: y.boolean().required(),
  flipn2: y.boolean().required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type C2CDistance = y.InferType<typeof C2CDistance>;
export const C2CDistance = y.object({
  id: oid,
  type: y
    .mixed((value): value is "c2cdistance" => value === "c2cdistance")
    .required(),
  c1_id: oid,
  c2_id: oid,
  dist: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type C2LDistance = y.InferType<typeof C2LDistance>;
export const C2LDistance = y.object({
  id: oid,
  type: y
    .mixed((value): value is "c2ldistance" => value === "c2ldistance")
    .required(),
  c_id: oid,
  l_id: oid,
  dist: y
    .mixed()
    .oneOf([ObjectParam, y.number().required(), y.string().required()])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentPoint2Ellipse = y.InferType<
  typeof InternalAlignmentPoint2Ellipse
>;
export const InternalAlignmentPoint2Ellipse = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_point2ellipse" =>
        value === "internal_alignment_point2ellipse",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  alignmentType: y
    .mixed()
    .oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentEllipseMajorDiameter = y.InferType<
  typeof InternalAlignmentEllipseMajorDiameter
>;
export const InternalAlignmentEllipseMajorDiameter = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_ellipse_major_diameter" =>
        value === "internal_alignment_ellipse_major_diameter",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentEllipseMinorDiameter = y.InferType<
  typeof InternalAlignmentEllipseMinorDiameter
>;
export const InternalAlignmentEllipseMinorDiameter = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_ellipse_minor_diameter" =>
        value === "internal_alignment_ellipse_minor_diameter",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentEllipseFocus1 = y.InferType<
  typeof InternalAlignmentEllipseFocus1
>;
export const InternalAlignmentEllipseFocus1 = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_ellipse_focus1" =>
        value === "internal_alignment_ellipse_focus1",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentEllipseFocus2 = y.InferType<
  typeof InternalAlignmentEllipseFocus2
>;
export const InternalAlignmentEllipseFocus2 = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_ellipse_focus2" =>
        value === "internal_alignment_ellipse_focus2",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentPoint2Hyperbola = y.InferType<
  typeof InternalAlignmentPoint2Hyperbola
>;
export const InternalAlignmentPoint2Hyperbola = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_point2hyperbola" =>
        value === "internal_alignment_point2hyperbola",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  alignmentType: y
    .mixed()
    .oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
    .required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentHyperbolaMajorDiameter = y.InferType<
  typeof InternalAlignmentHyperbolaMajorDiameter
>;
export const InternalAlignmentHyperbolaMajorDiameter = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_hyperbola_major_diameter" =>
        value === "internal_alignment_hyperbola_major_diameter",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentHyperbolaMinorDiameter = y.InferType<
  typeof InternalAlignmentHyperbolaMinorDiameter
>;
export const InternalAlignmentHyperbolaMinorDiameter = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_hyperbola_minor_diameter" =>
        value === "internal_alignment_hyperbola_minor_diameter",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentHyperbolaFocus = y.InferType<
  typeof InternalAlignmentHyperbolaFocus
>;
export const InternalAlignmentHyperbolaFocus = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_hyperbola_focus" =>
        value === "internal_alignment_hyperbola_focus",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentParabolaFocus = y.InferType<
  typeof InternalAlignmentParabolaFocus
>;
export const InternalAlignmentParabolaFocus = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_parabola_focus" =>
        value === "internal_alignment_parabola_focus",
    )
    .required(),
  e_id: oid,
  p1_id: oid,
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentBSplineControlPoint = y.InferType<
  typeof InternalAlignmentBSplineControlPoint
>;
export const InternalAlignmentBSplineControlPoint = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_bspline_control_point" =>
        value === "internal_alignment_bspline_control_point",
    )
    .required(),
  b_id: oid,
  c_id: oid,
  poleindex: y.number().required(),
  tag: y.number().required().optional(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type InternalAlignmentKnotPoint = y.InferType<
  typeof InternalAlignmentKnotPoint
>;
export const InternalAlignmentKnotPoint = y.object({
  id: oid,
  type: y
    .mixed(
      (value): value is "internal_alignment_knot_point" =>
        value === "internal_alignment_knot_point",
    )
    .required(),
  b_id: oid,
  p_id: oid,
  knotindex: y.number().required(),
  driving: y.boolean().required().optional(),
  temporary: y.boolean().required().optional(),
  scale: y.number().required().optional(),
});

export type Constraint = y.InferType<typeof Constraint>;
export const Constraint = y
  .mixed()
  .oneOf([
    Equal,
    Proportional,
    Difference,
    P2PDistance,
    P2PAngle_INCR_ANGLE,
    P2PAngle,
    P2LDistance,
    PointOnLine_PL,
    PointOnLine_PPP,
    PointOnPerpBisector_PL,
    PointOnPerpBisector_PPP,
    Parallel,
    Perpendicular_LL,
    Perpendicular_PPPP,
    L2LAngle_LL,
    L2LAngle_PPPP,
    AngleViaPoint,
    MidpointOnLine_LL,
    MidpointOnLine_PPPP,
    TangentCircumf,
    TangentAtBSplineKnot,
    P2PCoincident,
    Horizontal_L,
    Horizontal_PP,
    Vertical_L,
    Vertical_PP,
    CoordinateX,
    CoordinateY,
    ArcRules,
    PointOnCircle,
    PointOnEllipse,
    PointOnHyperbolicArc,
    PointOnParabolicArc,
    PointOnBSpline,
    ArcOfEllipseRules,
    CurveValue,
    ArcOfHyperbolaRules,
    ArcOfParabolaRules,
    PointOnArc,
    PerpendicularLine2Arc,
    PerpendicularArc2Line,
    PerpendicularCircle2Arc,
    PerpendicularArc2Circle,
    PerpendicularArc2Arc,
    Tangent_LC,
    Tangent_LE,
    Tangent_LA,
    Tangent_CC,
    Tangent_AA,
    Tangent_CA,
    CircleRadius,
    ArcRadius,
    CircleDiameter,
    ArcDiameter,
    EqualLength,
    EqualRadius_CC,
    EqualRadii_EE,
    EqualRadii_AHAH,
    EqualRadius_CA,
    EqualRadius_AA,
    EqualFocus,
    P2PSymmetric_PPL,
    P2PSymmetric_PPP,
    SnellsLaw,
    C2CDistance,
    C2LDistance,
    InternalAlignmentPoint2Ellipse,
    InternalAlignmentEllipseMajorDiameter,
    InternalAlignmentEllipseMinorDiameter,
    InternalAlignmentEllipseFocus1,
    InternalAlignmentEllipseFocus2,
    InternalAlignmentPoint2Hyperbola,
    InternalAlignmentHyperbolaMajorDiameter,
    InternalAlignmentHyperbolaMinorDiameter,
    InternalAlignmentHyperbolaFocus,
    InternalAlignmentParabolaFocus,
    InternalAlignmentBSplineControlPoint,
    InternalAlignmentKnotPoint,
  ])
  .required();

export type ConstraintParamType = y.InferType<typeof ConstraintParamType>;
export const ConstraintParamType = y
  .mixed()
  .oneOf([
    y
      .mixed()
      .oneOf([
        oid,
        y.mixed((value): value is "equal" => value === "equal").required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.mixed().oneOf([0, 1]).required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "proportional" => value === "proportional")
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.number().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "difference" => value === "difference")
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "p2p_distance" => value === "p2p_distance")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "p2p_angle_incr_angle" =>
              value === "p2p_angle_incr_angle",
          )
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.number().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "p2p_angle" => value === "p2p_angle")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "p2l_distance" => value === "p2l_distance")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_line_pl" =>
              value === "point_on_line_pl",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_line_ppp" =>
              value === "point_on_line_ppp",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_perp_bisector_pl" =>
              value === "point_on_perp_bisector_pl",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_perp_bisector_ppp" =>
              value === "point_on_perp_bisector_ppp",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "parallel" => value === "parallel")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_ll" =>
              value === "perpendicular_ll",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_pppp" =>
              value === "perpendicular_pppp",
          )
          .required(),
        oid,
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "l2l_angle_ll" => value === "l2l_angle_ll")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "l2l_angle_pppp" => value === "l2l_angle_pppp",
          )
          .required(),
        oid,
        oid,
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "angle_via_point" => value === "angle_via_point",
          )
          .required(),
        oid,
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "midpoint_on_line_ll" =>
              value === "midpoint_on_line_ll",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "midpoint_on_line_pppp" =>
              value === "midpoint_on_line_pppp",
          )
          .required(),
        oid,
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "tangent_circumf" => value === "tangent_circumf",
          )
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "tangent_at_bspline_knot" =>
              value === "tangent_at_bspline_knot",
          )
          .required(),
        oid,
        oid,
        y.number().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "p2p_coincident" => value === "p2p_coincident",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "horizontal_l" => value === "horizontal_l")
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "horizontal_pp" => value === "horizontal_pp")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "vertical_l" => value === "vertical_l")
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "vertical_pp" => value === "vertical_pp")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "coordinate_x" => value === "coordinate_x")
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "coordinate_y" => value === "coordinate_y")
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "arc_rules" => value === "arc_rules")
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_circle" => value === "point_on_circle",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_ellipse" =>
              value === "point_on_ellipse",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_hyperbolic_arc" =>
              value === "point_on_hyperbolic_arc",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_parabolic_arc" =>
              value === "point_on_parabolic_arc",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "point_on_bspline" =>
              value === "point_on_bspline",
          )
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "arc_of_ellipse_rules" =>
              value === "arc_of_ellipse_rules",
          )
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "curve_value" => value === "curve_value")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "arc_of_hyperbola_rules" =>
              value === "arc_of_hyperbola_rules",
          )
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "arc_of_parabola_rules" =>
              value === "arc_of_parabola_rules",
          )
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "point_on_arc" => value === "point_on_arc")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_line2arc" =>
              value === "perpendicular_line2arc",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_arc2line" =>
              value === "perpendicular_arc2line",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_circle2arc" =>
              value === "perpendicular_circle2arc",
          )
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_arc2circle" =>
              value === "perpendicular_arc2circle",
          )
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "perpendicular_arc2arc" =>
              value === "perpendicular_arc2arc",
          )
          .required(),
        oid,
        y.boolean().required(),
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "tangent_lc" => value === "tangent_lc")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "tangent_le" => value === "tangent_le")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "tangent_la" => value === "tangent_la")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "tangent_cc" => value === "tangent_cc")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "tangent_aa" => value === "tangent_aa")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "tangent_ca" => value === "tangent_ca")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "circle_radius" => value === "circle_radius")
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "arc_radius" => value === "arc_radius")
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "circle_diameter" => value === "circle_diameter",
          )
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "arc_diameter" => value === "arc_diameter")
          .required(),
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "equal_length" => value === "equal_length")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "equal_radius_cc" => value === "equal_radius_cc",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "equal_radii_ee" => value === "equal_radii_ee",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "equal_radii_ahah" =>
              value === "equal_radii_ahah",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "equal_radius_ca" => value === "equal_radius_ca",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "equal_radius_aa" => value === "equal_radius_aa",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "equal_focus" => value === "equal_focus")
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "p2p_symmetric_ppl" =>
              value === "p2p_symmetric_ppl",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "p2p_symmetric_ppp" =>
              value === "p2p_symmetric_ppp",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "snells_law" => value === "snells_law")
          .required(),
        oid,
        oid,
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "c2cdistance" => value === "c2cdistance")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed((value): value is "c2ldistance" => value === "c2ldistance")
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([ObjectParam, y.number().required(), y.string().required()])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_point2ellipse" =>
              value === "internal_alignment_point2ellipse",
          )
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_ellipse_major_diameter" =>
              value === "internal_alignment_ellipse_major_diameter",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_ellipse_minor_diameter" =>
              value === "internal_alignment_ellipse_minor_diameter",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_ellipse_focus1" =>
              value === "internal_alignment_ellipse_focus1",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_ellipse_focus2" =>
              value === "internal_alignment_ellipse_focus2",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_point2hyperbola" =>
              value === "internal_alignment_point2hyperbola",
          )
          .required(),
        oid,
        oid,
        y
          .mixed()
          .oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
          .required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_hyperbola_major_diameter" =>
              value === "internal_alignment_hyperbola_major_diameter",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_hyperbola_minor_diameter" =>
              value === "internal_alignment_hyperbola_minor_diameter",
          )
          .required(),
        oid,
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_hyperbola_focus" =>
              value === "internal_alignment_hyperbola_focus",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_parabola_focus" =>
              value === "internal_alignment_parabola_focus",
          )
          .required(),
        oid,
        oid,
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_bspline_control_point" =>
              value === "internal_alignment_bspline_control_point",
          )
          .required(),
        oid,
        oid,
        y.number().required(),
        y.number().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
    y
      .mixed()
      .oneOf([
        oid,
        y
          .mixed(
            (value): value is "internal_alignment_knot_point" =>
              value === "internal_alignment_knot_point",
          )
          .required(),
        oid,
        oid,
        y.number().required(),
        y.boolean().required(),
        y.boolean().required(),
        y.number().required(),
      ])
      .required(),
  ])
  .required();

export type IArc = y.InferType<typeof IArc>;
export const IArc = y.object({
  start_id: oid,
  end_id: oid,
  start_angle: y.number().required(),
  end_angle: y.number().required(),
});

export type SketchPoint = y.InferType<typeof SketchPoint>;
export const SketchPoint = y.object({
  id: oid,
  type: y.mixed((value): value is "point" => value === "point").required(),
  x: y.number().required(),
  y: y.number().required(),
  fixed: y.boolean().required(),
});

export type SketchLine = y.InferType<typeof SketchLine>;
export const SketchLine = y.object({
  id: oid,
  type: y.mixed((value): value is "line" => value === "line").required(),
  p1_id: oid,
  p2_id: oid,
});

export type SketchCircle = y.InferType<typeof SketchCircle>;
export const SketchCircle = y.object({
  id: oid,
  type: y.mixed((value): value is "circle" => value === "circle").required(),
  c_id: oid,
  radius: y.number().required(),
});

export type SketchArc = y.InferType<typeof SketchArc>;
export const SketchArc = y.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: y.number().required(),
  end_angle: y.number().required(),
  type: y.mixed((value): value is "arc" => value === "arc").required(),
  c_id: oid,
  radius: y.number().required(),
});

export type SketchEllipse = y.InferType<typeof SketchEllipse>;
export const SketchEllipse = y.object({
  id: oid,
  type: y.mixed((value): value is "ellipse" => value === "ellipse").required(),
  c_id: oid,
  focus1_id: oid,
  radmin: y.number().required(),
});

export type SketchArcOfEllipse = y.InferType<typeof SketchArcOfEllipse>;
export const SketchArcOfEllipse = y.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: y.number().required(),
  end_angle: y.number().required(),
  type: y
    .mixed((value): value is "arc_of_ellipse" => value === "arc_of_ellipse")
    .required(),
  c_id: oid,
  focus1_id: oid,
  radmin: y.number().required(),
});

export type SketchParabola = y.InferType<typeof SketchParabola>;
export const SketchParabola = y.object({
  id: oid,
  type: y
    .mixed((value): value is "parabola" => value === "parabola")
    .required(),
  vertex_id: oid,
  focus1_id: oid,
});

export type SketchArcOfParabola = y.InferType<typeof SketchArcOfParabola>;
export const SketchArcOfParabola = y.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: y.number().required(),
  end_angle: y.number().required(),
  type: y
    .mixed((value): value is "arc_of_parabola" => value === "arc_of_parabola")
    .required(),
  vertex_id: oid,
  focus1_id: oid,
});

export type SketchHyperbola = y.InferType<typeof SketchHyperbola>;
export const SketchHyperbola = y.object({
  id: oid,
  type: y
    .mixed((value): value is "hyperbola" => value === "hyperbola")
    .required(),
  c_id: oid,
  focus1_id: oid,
  radmin: y.number().required(),
});

export type SketchArcOfHyperbola = y.InferType<typeof SketchArcOfHyperbola>;
export const SketchArcOfHyperbola = y.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: y.number().required(),
  end_angle: y.number().required(),
  type: y
    .mixed((value): value is "arc_of_hyperbola" => value === "arc_of_hyperbola")
    .required(),
  c_id: oid,
  focus1_id: oid,
  radmin: y.number().required(),
});

export type SketchGeometry = y.InferType<typeof SketchGeometry>;
export const SketchGeometry = y
  .mixed()
  .oneOf([
    SketchPoint,
    SketchLine,
    SketchCircle,
    SketchArc,
    SketchEllipse,
    SketchArcOfEllipse,
    SketchParabola,
    SketchArcOfParabola,
    SketchHyperbola,
    SketchArcOfHyperbola,
  ])
  .required();

export type SketchPrimitive = y.InferType<typeof SketchPrimitive>;
export const SketchPrimitive = y
  .mixed()
  .oneOf([SketchGeometry, Constraint])
  .required();

export type SketchParam = y.InferType<typeof SketchParam>;
export const SketchParam = y.object({
  type: y.mixed((value): value is "param" => value === "param").required(),
  name: y.string().required(),
  value: y.number().required(),
});
