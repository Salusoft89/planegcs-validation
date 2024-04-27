import * as v from "valibot";

export type SketchGeometryProperty = v.Output<typeof SketchGeometryProperty>;
export const SketchGeometryProperty = v.union([
  v.literal("x"),
  v.literal("y"),
  v.literal("radius"),
  v.literal("start_angle"),
  v.literal("end_angle"),
  v.literal("radmin"),
]);

export type oid = v.Output<typeof oid>;
export const oid = v.string();

export type Id = v.Output<typeof Id>;
export const Id = v.object({
  id: oid,
});

export type ObjectParam = v.Output<typeof ObjectParam>;
export const ObjectParam = v.object({
  o_id: oid,
  prop: SketchGeometryProperty,
});

export type InternalAlignmentType = v.Output<typeof InternalAlignmentType>;
export const InternalAlignmentType = v.union([
  v.literal(0),
  v.literal(1),
  v.literal(2),
  v.literal(3),
  v.literal(4),
  v.literal(5),
  v.literal(6),
  v.literal(7),
  v.literal(8),
  v.literal(9),
  v.literal(10),
  v.literal(11),
  v.literal(12),
  v.literal(13),
  v.literal(14),
  v.literal(15),
  v.literal(16),
  v.literal(17),
]);

export type Constraint_Alignment = v.Output<typeof Constraint_Alignment>;
export const Constraint_Alignment = v.union([v.literal(0), v.literal(1)]);

export type Equal = v.Output<typeof Equal>;
export const Equal = v.object({
  id: oid,
  type: v.literal("equal"),
  param1: v.union([ObjectParam, v.number(), v.string()]),
  param2: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  internalalignment: v.optional(v.union([v.literal(0), v.literal(1)])),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Proportional = v.Output<typeof Proportional>;
export const Proportional = v.object({
  id: oid,
  type: v.literal("proportional"),
  param1: v.union([ObjectParam, v.number(), v.string()]),
  param2: v.union([ObjectParam, v.number(), v.string()]),
  ratio: v.number(),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Difference = v.Output<typeof Difference>;
export const Difference = v.object({
  id: oid,
  type: v.literal("difference"),
  param1: v.union([ObjectParam, v.number(), v.string()]),
  param2: v.union([ObjectParam, v.number(), v.string()]),
  difference: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2PDistance = v.Output<typeof P2PDistance>;
export const P2PDistance = v.object({
  id: oid,
  type: v.literal("p2p_distance"),
  p1_id: oid,
  p2_id: oid,
  distance: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2PAngle_INCR_ANGLE = v.Output<typeof P2PAngle_INCR_ANGLE>;
export const P2PAngle_INCR_ANGLE = v.object({
  id: oid,
  type: v.literal("p2p_angle_incr_angle"),
  p1_id: oid,
  p2_id: oid,
  angle: v.union([ObjectParam, v.number(), v.string()]),
  incrAngle: v.number(),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2PAngle = v.Output<typeof P2PAngle>;
export const P2PAngle = v.object({
  id: oid,
  type: v.literal("p2p_angle"),
  p1_id: oid,
  p2_id: oid,
  angle: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2LDistance = v.Output<typeof P2LDistance>;
export const P2LDistance = v.object({
  id: oid,
  type: v.literal("p2l_distance"),
  p_id: oid,
  l_id: oid,
  distance: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnLine_PL = v.Output<typeof PointOnLine_PL>;
export const PointOnLine_PL = v.object({
  id: oid,
  type: v.literal("point_on_line_pl"),
  p_id: oid,
  l_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnLine_PPP = v.Output<typeof PointOnLine_PPP>;
export const PointOnLine_PPP = v.object({
  id: oid,
  type: v.literal("point_on_line_ppp"),
  p_id: oid,
  lp1_id: oid,
  lp2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnPerpBisector_PL = v.Output<typeof PointOnPerpBisector_PL>;
export const PointOnPerpBisector_PL = v.object({
  id: oid,
  type: v.literal("point_on_perp_bisector_pl"),
  p_id: oid,
  l_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnPerpBisector_PPP = v.Output<typeof PointOnPerpBisector_PPP>;
export const PointOnPerpBisector_PPP = v.object({
  id: oid,
  type: v.literal("point_on_perp_bisector_ppp"),
  p_id: oid,
  lp1_id: oid,
  lp2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Parallel = v.Output<typeof Parallel>;
export const Parallel = v.object({
  id: oid,
  type: v.literal("parallel"),
  l1_id: oid,
  l2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Perpendicular_LL = v.Output<typeof Perpendicular_LL>;
export const Perpendicular_LL = v.object({
  id: oid,
  type: v.literal("perpendicular_ll"),
  l1_id: oid,
  l2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Perpendicular_PPPP = v.Output<typeof Perpendicular_PPPP>;
export const Perpendicular_PPPP = v.object({
  id: oid,
  type: v.literal("perpendicular_pppp"),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type L2LAngle_LL = v.Output<typeof L2LAngle_LL>;
export const L2LAngle_LL = v.object({
  id: oid,
  type: v.literal("l2l_angle_ll"),
  l1_id: oid,
  l2_id: oid,
  angle: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type L2LAngle_PPPP = v.Output<typeof L2LAngle_PPPP>;
export const L2LAngle_PPPP = v.object({
  id: oid,
  type: v.literal("l2l_angle_pppp"),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  angle: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type AngleViaPoint = v.Output<typeof AngleViaPoint>;
export const AngleViaPoint = v.object({
  id: oid,
  type: v.literal("angle_via_point"),
  crv1_id: oid,
  crv2_id: oid,
  p_id: oid,
  angle: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type MidpointOnLine_LL = v.Output<typeof MidpointOnLine_LL>;
export const MidpointOnLine_LL = v.object({
  id: oid,
  type: v.literal("midpoint_on_line_ll"),
  l1_id: oid,
  l2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type MidpointOnLine_PPPP = v.Output<typeof MidpointOnLine_PPPP>;
export const MidpointOnLine_PPPP = v.object({
  id: oid,
  type: v.literal("midpoint_on_line_pppp"),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type TangentCircumf = v.Output<typeof TangentCircumf>;
export const TangentCircumf = v.object({
  id: oid,
  type: v.literal("tangent_circumf"),
  p1_id: oid,
  p2_id: oid,
  rd1: v.union([ObjectParam, v.number(), v.string()]),
  rd2: v.union([ObjectParam, v.number(), v.string()]),
  internal: v.optional(v.boolean()),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type TangentAtBSplineKnot = v.Output<typeof TangentAtBSplineKnot>;
export const TangentAtBSplineKnot = v.object({
  id: oid,
  type: v.literal("tangent_at_bspline_knot"),
  b_id: oid,
  l_id: oid,
  knotindex: v.number(),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2PCoincident = v.Output<typeof P2PCoincident>;
export const P2PCoincident = v.object({
  id: oid,
  type: v.literal("p2p_coincident"),
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Horizontal_L = v.Output<typeof Horizontal_L>;
export const Horizontal_L = v.object({
  id: oid,
  type: v.literal("horizontal_l"),
  l_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Horizontal_PP = v.Output<typeof Horizontal_PP>;
export const Horizontal_PP = v.object({
  id: oid,
  type: v.literal("horizontal_pp"),
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Vertical_L = v.Output<typeof Vertical_L>;
export const Vertical_L = v.object({
  id: oid,
  type: v.literal("vertical_l"),
  l_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Vertical_PP = v.Output<typeof Vertical_PP>;
export const Vertical_PP = v.object({
  id: oid,
  type: v.literal("vertical_pp"),
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type CoordinateX = v.Output<typeof CoordinateX>;
export const CoordinateX = v.object({
  id: oid,
  type: v.literal("coordinate_x"),
  p_id: oid,
  x: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type CoordinateY = v.Output<typeof CoordinateY>;
export const CoordinateY = v.object({
  id: oid,
  type: v.literal("coordinate_y"),
  p_id: oid,
  y: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type ArcRules = v.Output<typeof ArcRules>;
export const ArcRules = v.object({
  id: oid,
  type: v.literal("arc_rules"),
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnCircle = v.Output<typeof PointOnCircle>;
export const PointOnCircle = v.object({
  id: oid,
  type: v.literal("point_on_circle"),
  p_id: oid,
  c_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnEllipse = v.Output<typeof PointOnEllipse>;
export const PointOnEllipse = v.object({
  id: oid,
  type: v.literal("point_on_ellipse"),
  p_id: oid,
  e_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnHyperbolicArc = v.Output<typeof PointOnHyperbolicArc>;
export const PointOnHyperbolicArc = v.object({
  id: oid,
  type: v.literal("point_on_hyperbolic_arc"),
  p_id: oid,
  e_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnParabolicArc = v.Output<typeof PointOnParabolicArc>;
export const PointOnParabolicArc = v.object({
  id: oid,
  type: v.literal("point_on_parabolic_arc"),
  p_id: oid,
  e_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnBSpline = v.Output<typeof PointOnBSpline>;
export const PointOnBSpline = v.object({
  id: oid,
  type: v.literal("point_on_bspline"),
  p_id: oid,
  b_id: oid,
  pointparam: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type ArcOfEllipseRules = v.Output<typeof ArcOfEllipseRules>;
export const ArcOfEllipseRules = v.object({
  id: oid,
  type: v.literal("arc_of_ellipse_rules"),
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type CurveValue = v.Output<typeof CurveValue>;
export const CurveValue = v.object({
  id: oid,
  type: v.literal("curve_value"),
  p_id: oid,
  a_id: oid,
  u: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type ArcOfHyperbolaRules = v.Output<typeof ArcOfHyperbolaRules>;
export const ArcOfHyperbolaRules = v.object({
  id: oid,
  type: v.literal("arc_of_hyperbola_rules"),
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type ArcOfParabolaRules = v.Output<typeof ArcOfParabolaRules>;
export const ArcOfParabolaRules = v.object({
  id: oid,
  type: v.literal("arc_of_parabola_rules"),
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PointOnArc = v.Output<typeof PointOnArc>;
export const PointOnArc = v.object({
  id: oid,
  type: v.literal("point_on_arc"),
  p_id: oid,
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PerpendicularLine2Arc = v.Output<typeof PerpendicularLine2Arc>;
export const PerpendicularLine2Arc = v.object({
  id: oid,
  type: v.literal("perpendicular_line2arc"),
  p1_id: oid,
  p2_id: oid,
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PerpendicularArc2Line = v.Output<typeof PerpendicularArc2Line>;
export const PerpendicularArc2Line = v.object({
  id: oid,
  type: v.literal("perpendicular_arc2line"),
  a_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PerpendicularCircle2Arc = v.Output<typeof PerpendicularCircle2Arc>;
export const PerpendicularCircle2Arc = v.object({
  id: oid,
  type: v.literal("perpendicular_circle2arc"),
  center_id: oid,
  radius: v.union([ObjectParam, v.number(), v.string()]),
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PerpendicularArc2Circle = v.Output<typeof PerpendicularArc2Circle>;
export const PerpendicularArc2Circle = v.object({
  id: oid,
  type: v.literal("perpendicular_arc2circle"),
  a_id: oid,
  center_id: oid,
  radius: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type PerpendicularArc2Arc = v.Output<typeof PerpendicularArc2Arc>;
export const PerpendicularArc2Arc = v.object({
  id: oid,
  type: v.literal("perpendicular_arc2arc"),
  a1_id: oid,
  reverse1: v.boolean(),
  a2_id: oid,
  reverse2: v.boolean(),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Tangent_LC = v.Output<typeof Tangent_LC>;
export const Tangent_LC = v.object({
  id: oid,
  type: v.literal("tangent_lc"),
  l_id: oid,
  c_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Tangent_LE = v.Output<typeof Tangent_LE>;
export const Tangent_LE = v.object({
  id: oid,
  type: v.literal("tangent_le"),
  l_id: oid,
  e_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Tangent_LA = v.Output<typeof Tangent_LA>;
export const Tangent_LA = v.object({
  id: oid,
  type: v.literal("tangent_la"),
  l_id: oid,
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Tangent_CC = v.Output<typeof Tangent_CC>;
export const Tangent_CC = v.object({
  id: oid,
  type: v.literal("tangent_cc"),
  c1_id: oid,
  c2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Tangent_AA = v.Output<typeof Tangent_AA>;
export const Tangent_AA = v.object({
  id: oid,
  type: v.literal("tangent_aa"),
  a1_id: oid,
  a2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Tangent_CA = v.Output<typeof Tangent_CA>;
export const Tangent_CA = v.object({
  id: oid,
  type: v.literal("tangent_ca"),
  c_id: oid,
  a_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type CircleRadius = v.Output<typeof CircleRadius>;
export const CircleRadius = v.object({
  id: oid,
  type: v.literal("circle_radius"),
  c_id: oid,
  radius: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type ArcRadius = v.Output<typeof ArcRadius>;
export const ArcRadius = v.object({
  id: oid,
  type: v.literal("arc_radius"),
  a_id: oid,
  radius: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type CircleDiameter = v.Output<typeof CircleDiameter>;
export const CircleDiameter = v.object({
  id: oid,
  type: v.literal("circle_diameter"),
  c_id: oid,
  diameter: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type ArcDiameter = v.Output<typeof ArcDiameter>;
export const ArcDiameter = v.object({
  id: oid,
  type: v.literal("arc_diameter"),
  a_id: oid,
  diameter: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualLength = v.Output<typeof EqualLength>;
export const EqualLength = v.object({
  id: oid,
  type: v.literal("equal_length"),
  l1_id: oid,
  l2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualRadius_CC = v.Output<typeof EqualRadius_CC>;
export const EqualRadius_CC = v.object({
  id: oid,
  type: v.literal("equal_radius_cc"),
  c1_id: oid,
  c2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualRadii_EE = v.Output<typeof EqualRadii_EE>;
export const EqualRadii_EE = v.object({
  id: oid,
  type: v.literal("equal_radii_ee"),
  e1_id: oid,
  e2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualRadii_AHAH = v.Output<typeof EqualRadii_AHAH>;
export const EqualRadii_AHAH = v.object({
  id: oid,
  type: v.literal("equal_radii_ahah"),
  a1_id: oid,
  a2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualRadius_CA = v.Output<typeof EqualRadius_CA>;
export const EqualRadius_CA = v.object({
  id: oid,
  type: v.literal("equal_radius_ca"),
  c1_id: oid,
  a2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualRadius_AA = v.Output<typeof EqualRadius_AA>;
export const EqualRadius_AA = v.object({
  id: oid,
  type: v.literal("equal_radius_aa"),
  a1_id: oid,
  a2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type EqualFocus = v.Output<typeof EqualFocus>;
export const EqualFocus = v.object({
  id: oid,
  type: v.literal("equal_focus"),
  a1_id: oid,
  a2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2PSymmetric_PPL = v.Output<typeof P2PSymmetric_PPL>;
export const P2PSymmetric_PPL = v.object({
  id: oid,
  type: v.literal("p2p_symmetric_ppl"),
  p1_id: oid,
  p2_id: oid,
  l_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type P2PSymmetric_PPP = v.Output<typeof P2PSymmetric_PPP>;
export const P2PSymmetric_PPP = v.object({
  id: oid,
  type: v.literal("p2p_symmetric_ppp"),
  p1_id: oid,
  p2_id: oid,
  p_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type SnellsLaw = v.Output<typeof SnellsLaw>;
export const SnellsLaw = v.object({
  id: oid,
  type: v.literal("snells_law"),
  ray1_id: oid,
  ray2_id: oid,
  boundary_id: oid,
  p_id: oid,
  n1: v.union([ObjectParam, v.number(), v.string()]),
  n2: v.union([ObjectParam, v.number(), v.string()]),
  flipn1: v.boolean(),
  flipn2: v.boolean(),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type C2CDistance = v.Output<typeof C2CDistance>;
export const C2CDistance = v.object({
  id: oid,
  type: v.literal("c2cdistance"),
  c1_id: oid,
  c2_id: oid,
  dist: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type C2LDistance = v.Output<typeof C2LDistance>;
export const C2LDistance = v.object({
  id: oid,
  type: v.literal("c2ldistance"),
  c_id: oid,
  l_id: oid,
  dist: v.union([ObjectParam, v.number(), v.string()]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentPoint2Ellipse = v.Output<
  typeof InternalAlignmentPoint2Ellipse
>;
export const InternalAlignmentPoint2Ellipse = v.object({
  id: oid,
  type: v.literal("internal_alignment_point2ellipse"),
  e_id: oid,
  p1_id: oid,
  alignmentType: v.union([
    v.literal(0),
    v.literal(1),
    v.literal(2),
    v.literal(3),
    v.literal(4),
    v.literal(5),
    v.literal(6),
    v.literal(7),
    v.literal(8),
    v.literal(9),
    v.literal(10),
    v.literal(11),
    v.literal(12),
    v.literal(13),
    v.literal(14),
    v.literal(15),
    v.literal(16),
    v.literal(17),
  ]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentEllipseMajorDiameter = v.Output<
  typeof InternalAlignmentEllipseMajorDiameter
>;
export const InternalAlignmentEllipseMajorDiameter = v.object({
  id: oid,
  type: v.literal("internal_alignment_ellipse_major_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentEllipseMinorDiameter = v.Output<
  typeof InternalAlignmentEllipseMinorDiameter
>;
export const InternalAlignmentEllipseMinorDiameter = v.object({
  id: oid,
  type: v.literal("internal_alignment_ellipse_minor_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentEllipseFocus1 = v.Output<
  typeof InternalAlignmentEllipseFocus1
>;
export const InternalAlignmentEllipseFocus1 = v.object({
  id: oid,
  type: v.literal("internal_alignment_ellipse_focus1"),
  e_id: oid,
  p1_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentEllipseFocus2 = v.Output<
  typeof InternalAlignmentEllipseFocus2
>;
export const InternalAlignmentEllipseFocus2 = v.object({
  id: oid,
  type: v.literal("internal_alignment_ellipse_focus2"),
  e_id: oid,
  p1_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentPoint2Hyperbola = v.Output<
  typeof InternalAlignmentPoint2Hyperbola
>;
export const InternalAlignmentPoint2Hyperbola = v.object({
  id: oid,
  type: v.literal("internal_alignment_point2hyperbola"),
  e_id: oid,
  p1_id: oid,
  alignmentType: v.union([
    v.literal(0),
    v.literal(1),
    v.literal(2),
    v.literal(3),
    v.literal(4),
    v.literal(5),
    v.literal(6),
    v.literal(7),
    v.literal(8),
    v.literal(9),
    v.literal(10),
    v.literal(11),
    v.literal(12),
    v.literal(13),
    v.literal(14),
    v.literal(15),
    v.literal(16),
    v.literal(17),
  ]),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentHyperbolaMajorDiameter = v.Output<
  typeof InternalAlignmentHyperbolaMajorDiameter
>;
export const InternalAlignmentHyperbolaMajorDiameter = v.object({
  id: oid,
  type: v.literal("internal_alignment_hyperbola_major_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentHyperbolaMinorDiameter = v.Output<
  typeof InternalAlignmentHyperbolaMinorDiameter
>;
export const InternalAlignmentHyperbolaMinorDiameter = v.object({
  id: oid,
  type: v.literal("internal_alignment_hyperbola_minor_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentHyperbolaFocus = v.Output<
  typeof InternalAlignmentHyperbolaFocus
>;
export const InternalAlignmentHyperbolaFocus = v.object({
  id: oid,
  type: v.literal("internal_alignment_hyperbola_focus"),
  e_id: oid,
  p1_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentParabolaFocus = v.Output<
  typeof InternalAlignmentParabolaFocus
>;
export const InternalAlignmentParabolaFocus = v.object({
  id: oid,
  type: v.literal("internal_alignment_parabola_focus"),
  e_id: oid,
  p1_id: oid,
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentBSplineControlPoint = v.Output<
  typeof InternalAlignmentBSplineControlPoint
>;
export const InternalAlignmentBSplineControlPoint = v.object({
  id: oid,
  type: v.literal("internal_alignment_bspline_control_point"),
  b_id: oid,
  c_id: oid,
  poleindex: v.number(),
  tag: v.optional(v.number()),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type InternalAlignmentKnotPoint = v.Output<
  typeof InternalAlignmentKnotPoint
>;
export const InternalAlignmentKnotPoint = v.object({
  id: oid,
  type: v.literal("internal_alignment_knot_point"),
  b_id: oid,
  p_id: oid,
  knotindex: v.number(),
  driving: v.optional(v.boolean()),
  temporary: v.optional(v.boolean()),
  scale: v.optional(v.number()),
});

export type Constraint = v.Output<typeof Constraint>;
export const Constraint = v.union([
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
]);

export type ConstraintParamType = v.Output<typeof ConstraintParamType>;
export const ConstraintParamType = v.union([
  v.union([
    oid,
    v.literal("equal"),
    v.union([ObjectParam, v.number(), v.string()]),
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.union([v.literal(0), v.literal(1)]),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("proportional"),
    v.union([ObjectParam, v.number(), v.string()]),
    v.union([ObjectParam, v.number(), v.string()]),
    v.number(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("difference"),
    v.union([ObjectParam, v.number(), v.string()]),
    v.union([ObjectParam, v.number(), v.string()]),
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2p_distance"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2p_angle_incr_angle"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.number(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2p_angle"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2l_distance"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_line_pl"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_line_ppp"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_perp_bisector_pl"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_perp_bisector_ppp"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("parallel"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_ll"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_pppp"),
    oid,
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("l2l_angle_ll"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("l2l_angle_pppp"),
    oid,
    oid,
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("angle_via_point"),
    oid,
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("midpoint_on_line_ll"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("midpoint_on_line_pppp"),
    oid,
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_circumf"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_at_bspline_knot"),
    oid,
    oid,
    v.number(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2p_coincident"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("horizontal_l"),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("horizontal_pp"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("vertical_l"),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("vertical_pp"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("coordinate_x"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("coordinate_y"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("arc_rules"),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_circle"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_ellipse"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_hyperbolic_arc"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_parabolic_arc"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_bspline"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("arc_of_ellipse_rules"),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("curve_value"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("arc_of_hyperbola_rules"),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("arc_of_parabola_rules"),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("point_on_arc"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_line2arc"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_arc2line"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_circle2arc"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_arc2circle"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("perpendicular_arc2arc"),
    oid,
    v.boolean(),
    oid,
    v.boolean(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_lc"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_le"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_la"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_cc"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_aa"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("tangent_ca"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("circle_radius"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("arc_radius"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("circle_diameter"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("arc_diameter"),
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_length"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_radius_cc"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_radii_ee"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_radii_ahah"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_radius_ca"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_radius_aa"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("equal_focus"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2p_symmetric_ppl"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("p2p_symmetric_ppp"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("snells_law"),
    oid,
    oid,
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("c2cdistance"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("c2ldistance"),
    oid,
    oid,
    v.union([ObjectParam, v.number(), v.string()]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_point2ellipse"),
    oid,
    oid,
    v.union([
      v.literal(0),
      v.literal(1),
      v.literal(2),
      v.literal(3),
      v.literal(4),
      v.literal(5),
      v.literal(6),
      v.literal(7),
      v.literal(8),
      v.literal(9),
      v.literal(10),
      v.literal(11),
      v.literal(12),
      v.literal(13),
      v.literal(14),
      v.literal(15),
      v.literal(16),
      v.literal(17),
    ]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_ellipse_major_diameter"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_ellipse_minor_diameter"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_ellipse_focus1"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_ellipse_focus2"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_point2hyperbola"),
    oid,
    oid,
    v.union([
      v.literal(0),
      v.literal(1),
      v.literal(2),
      v.literal(3),
      v.literal(4),
      v.literal(5),
      v.literal(6),
      v.literal(7),
      v.literal(8),
      v.literal(9),
      v.literal(10),
      v.literal(11),
      v.literal(12),
      v.literal(13),
      v.literal(14),
      v.literal(15),
      v.literal(16),
      v.literal(17),
    ]),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_hyperbola_major_diameter"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_hyperbola_minor_diameter"),
    oid,
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_hyperbola_focus"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_parabola_focus"),
    oid,
    oid,
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_bspline_control_point"),
    oid,
    oid,
    v.number(),
    v.number(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
  v.union([
    oid,
    v.literal("internal_alignment_knot_point"),
    oid,
    oid,
    v.number(),
    v.boolean(),
    v.boolean(),
    v.number(),
  ]),
]);

export type IArc = v.Output<typeof IArc>;
export const IArc = v.object({
  start_id: oid,
  end_id: oid,
  start_angle: v.number(),
  end_angle: v.number(),
});

export type SketchPoint = v.Output<typeof SketchPoint>;
export const SketchPoint = v.object({
  id: oid,
  type: v.literal("point"),
  x: v.number(),
  y: v.number(),
  fixed: v.boolean(),
});

export type SketchLine = v.Output<typeof SketchLine>;
export const SketchLine = v.object({
  id: oid,
  type: v.literal("line"),
  p1_id: oid,
  p2_id: oid,
});

export type SketchCircle = v.Output<typeof SketchCircle>;
export const SketchCircle = v.object({
  id: oid,
  type: v.literal("circle"),
  c_id: oid,
  radius: v.number(),
});

export type SketchArc = v.Output<typeof SketchArc>;
export const SketchArc = v.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: v.number(),
  end_angle: v.number(),
  type: v.literal("arc"),
  c_id: oid,
  radius: v.number(),
});

export type SketchEllipse = v.Output<typeof SketchEllipse>;
export const SketchEllipse = v.object({
  id: oid,
  type: v.literal("ellipse"),
  c_id: oid,
  focus1_id: oid,
  radmin: v.number(),
});

export type SketchArcOfEllipse = v.Output<typeof SketchArcOfEllipse>;
export const SketchArcOfEllipse = v.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: v.number(),
  end_angle: v.number(),
  type: v.literal("arc_of_ellipse"),
  c_id: oid,
  focus1_id: oid,
  radmin: v.number(),
});

export type SketchParabola = v.Output<typeof SketchParabola>;
export const SketchParabola = v.object({
  id: oid,
  type: v.literal("parabola"),
  vertex_id: oid,
  focus1_id: oid,
});

export type SketchArcOfParabola = v.Output<typeof SketchArcOfParabola>;
export const SketchArcOfParabola = v.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: v.number(),
  end_angle: v.number(),
  type: v.literal("arc_of_parabola"),
  vertex_id: oid,
  focus1_id: oid,
});

export type SketchHyperbola = v.Output<typeof SketchHyperbola>;
export const SketchHyperbola = v.object({
  id: oid,
  type: v.literal("hyperbola"),
  c_id: oid,
  focus1_id: oid,
  radmin: v.number(),
});

export type SketchArcOfHyperbola = v.Output<typeof SketchArcOfHyperbola>;
export const SketchArcOfHyperbola = v.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: v.number(),
  end_angle: v.number(),
  type: v.literal("arc_of_hyperbola"),
  c_id: oid,
  focus1_id: oid,
  radmin: v.number(),
});

export type SketchGeometry = v.Output<typeof SketchGeometry>;
export const SketchGeometry = v.union([
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
]);

export type SketchPrimitive = v.Output<typeof SketchPrimitive>;
export const SketchPrimitive = v.union([SketchGeometry, Constraint]);

export type SketchParam = v.Output<typeof SketchParam>;
export const SketchParam = v.object({
  type: v.literal("param"),
  name: v.string(),
  value: v.number(),
});
