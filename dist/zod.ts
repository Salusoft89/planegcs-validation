import z from "zod";

export type oid = z.infer<typeof oid>;
export const oid = z.string();

export type Id = z.infer<typeof Id>;
export const Id = z.object({
  id: oid,
});

export type InternalAlignmentType = z.infer<typeof InternalAlignmentType>;
export const InternalAlignmentType = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
  z.literal(10),
  z.literal(11),
  z.literal(12),
  z.literal(13),
  z.literal(14),
  z.literal(15),
  z.literal(16),
  z.literal(17),
]);

export type DebugMode = z.infer<typeof DebugMode>;
export const DebugMode = z.union([z.literal(0), z.literal(1), z.literal(2)]);

export type Constraint_Alignment = z.infer<typeof Constraint_Alignment>;
export const Constraint_Alignment = z.union([z.literal(0), z.literal(1)]);

export type SolveStatus = z.infer<typeof SolveStatus>;
export const SolveStatus = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

export type Algorithm = z.infer<typeof Algorithm>;
export const Algorithm = z.union([z.literal(0), z.literal(1), z.literal(2)]);

export type SketchGeometryProperty = z.infer<typeof SketchGeometryProperty>;
export const SketchGeometryProperty = z.union([
  z.literal("x"),
  z.literal("y"),
  z.literal("radius"),
  z.literal("start_angle"),
  z.literal("end_angle"),
  z.literal("radmin"),
]);

export type ObjectParam = z.infer<typeof ObjectParam>;
export const ObjectParam = z.object({
  o_id: oid,
  prop: SketchGeometryProperty,
});

export type Equal = z.infer<typeof Equal>;
export const Equal = z.object({
  id: oid,
  type: z.literal("equal"),
  param1: z.union([ObjectParam, z.number(), z.string()]),
  param2: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  internalalignment: Constraint_Alignment.optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Proportional = z.infer<typeof Proportional>;
export const Proportional = z.object({
  id: oid,
  type: z.literal("proportional"),
  param1: z.union([ObjectParam, z.number(), z.string()]),
  param2: z.union([ObjectParam, z.number(), z.string()]),
  ratio: z.number(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Difference = z.infer<typeof Difference>;
export const Difference = z.object({
  id: oid,
  type: z.literal("difference"),
  param1: z.union([ObjectParam, z.number(), z.string()]),
  param2: z.union([ObjectParam, z.number(), z.string()]),
  difference: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2PDistance = z.infer<typeof P2PDistance>;
export const P2PDistance = z.object({
  id: oid,
  type: z.literal("p2p_distance"),
  p1_id: oid,
  p2_id: oid,
  distance: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2PAngle_INCR_ANGLE = z.infer<typeof P2PAngle_INCR_ANGLE>;
export const P2PAngle_INCR_ANGLE = z.object({
  id: oid,
  type: z.literal("p2p_angle_incr_angle"),
  p1_id: oid,
  p2_id: oid,
  angle: z.union([ObjectParam, z.number(), z.string()]),
  incrAngle: z.number(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2PAngle = z.infer<typeof P2PAngle>;
export const P2PAngle = z.object({
  id: oid,
  type: z.literal("p2p_angle"),
  p1_id: oid,
  p2_id: oid,
  angle: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2LDistance = z.infer<typeof P2LDistance>;
export const P2LDistance = z.object({
  id: oid,
  type: z.literal("p2l_distance"),
  p_id: oid,
  l_id: oid,
  distance: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnLine_PL = z.infer<typeof PointOnLine_PL>;
export const PointOnLine_PL = z.object({
  id: oid,
  type: z.literal("point_on_line_pl"),
  p_id: oid,
  l_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnLine_PPP = z.infer<typeof PointOnLine_PPP>;
export const PointOnLine_PPP = z.object({
  id: oid,
  type: z.literal("point_on_line_ppp"),
  p_id: oid,
  lp1_id: oid,
  lp2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnPerpBisector_PL = z.infer<typeof PointOnPerpBisector_PL>;
export const PointOnPerpBisector_PL = z.object({
  id: oid,
  type: z.literal("point_on_perp_bisector_pl"),
  p_id: oid,
  l_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnPerpBisector_PPP = z.infer<typeof PointOnPerpBisector_PPP>;
export const PointOnPerpBisector_PPP = z.object({
  id: oid,
  type: z.literal("point_on_perp_bisector_ppp"),
  p_id: oid,
  lp1_id: oid,
  lp2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Parallel = z.infer<typeof Parallel>;
export const Parallel = z.object({
  id: oid,
  type: z.literal("parallel"),
  l1_id: oid,
  l2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Perpendicular_LL = z.infer<typeof Perpendicular_LL>;
export const Perpendicular_LL = z.object({
  id: oid,
  type: z.literal("perpendicular_ll"),
  l1_id: oid,
  l2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Perpendicular_PPPP = z.infer<typeof Perpendicular_PPPP>;
export const Perpendicular_PPPP = z.object({
  id: oid,
  type: z.literal("perpendicular_pppp"),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type L2LAngle_LL = z.infer<typeof L2LAngle_LL>;
export const L2LAngle_LL = z.object({
  id: oid,
  type: z.literal("l2l_angle_ll"),
  l1_id: oid,
  l2_id: oid,
  angle: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type L2LAngle_PPPP = z.infer<typeof L2LAngle_PPPP>;
export const L2LAngle_PPPP = z.object({
  id: oid,
  type: z.literal("l2l_angle_pppp"),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  angle: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type AngleViaPoint = z.infer<typeof AngleViaPoint>;
export const AngleViaPoint = z.object({
  id: oid,
  type: z.literal("angle_via_point"),
  crv1_id: oid,
  crv2_id: oid,
  p_id: oid,
  angle: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type MidpointOnLine_LL = z.infer<typeof MidpointOnLine_LL>;
export const MidpointOnLine_LL = z.object({
  id: oid,
  type: z.literal("midpoint_on_line_ll"),
  l1_id: oid,
  l2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type MidpointOnLine_PPPP = z.infer<typeof MidpointOnLine_PPPP>;
export const MidpointOnLine_PPPP = z.object({
  id: oid,
  type: z.literal("midpoint_on_line_pppp"),
  l1p1_id: oid,
  l1p2_id: oid,
  l2p1_id: oid,
  l2p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type TangentCircumf = z.infer<typeof TangentCircumf>;
export const TangentCircumf = z.object({
  id: oid,
  type: z.literal("tangent_circumf"),
  p1_id: oid,
  p2_id: oid,
  rd1: z.union([ObjectParam, z.number(), z.string()]),
  rd2: z.union([ObjectParam, z.number(), z.string()]),
  internal: z.boolean().optional(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type TangentAtBSplineKnot = z.infer<typeof TangentAtBSplineKnot>;
export const TangentAtBSplineKnot = z.object({
  id: oid,
  type: z.literal("tangent_at_bspline_knot"),
  b_id: oid,
  l_id: oid,
  knotindex: z.number(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2PCoincident = z.infer<typeof P2PCoincident>;
export const P2PCoincident = z.object({
  id: oid,
  type: z.literal("p2p_coincident"),
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Horizontal_L = z.infer<typeof Horizontal_L>;
export const Horizontal_L = z.object({
  id: oid,
  type: z.literal("horizontal_l"),
  l_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Horizontal_PP = z.infer<typeof Horizontal_PP>;
export const Horizontal_PP = z.object({
  id: oid,
  type: z.literal("horizontal_pp"),
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Vertical_L = z.infer<typeof Vertical_L>;
export const Vertical_L = z.object({
  id: oid,
  type: z.literal("vertical_l"),
  l_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Vertical_PP = z.infer<typeof Vertical_PP>;
export const Vertical_PP = z.object({
  id: oid,
  type: z.literal("vertical_pp"),
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type CoordinateX = z.infer<typeof CoordinateX>;
export const CoordinateX = z.object({
  id: oid,
  type: z.literal("coordinate_x"),
  p_id: oid,
  x: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type CoordinateY = z.infer<typeof CoordinateY>;
export const CoordinateY = z.object({
  id: oid,
  type: z.literal("coordinate_y"),
  p_id: oid,
  y: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type ArcRules = z.infer<typeof ArcRules>;
export const ArcRules = z.object({
  id: oid,
  type: z.literal("arc_rules"),
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnCircle = z.infer<typeof PointOnCircle>;
export const PointOnCircle = z.object({
  id: oid,
  type: z.literal("point_on_circle"),
  p_id: oid,
  c_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnEllipse = z.infer<typeof PointOnEllipse>;
export const PointOnEllipse = z.object({
  id: oid,
  type: z.literal("point_on_ellipse"),
  p_id: oid,
  e_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnHyperbolicArc = z.infer<typeof PointOnHyperbolicArc>;
export const PointOnHyperbolicArc = z.object({
  id: oid,
  type: z.literal("point_on_hyperbolic_arc"),
  p_id: oid,
  e_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnParabolicArc = z.infer<typeof PointOnParabolicArc>;
export const PointOnParabolicArc = z.object({
  id: oid,
  type: z.literal("point_on_parabolic_arc"),
  p_id: oid,
  e_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnBSpline = z.infer<typeof PointOnBSpline>;
export const PointOnBSpline = z.object({
  id: oid,
  type: z.literal("point_on_bspline"),
  p_id: oid,
  b_id: oid,
  pointparam: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type ArcOfEllipseRules = z.infer<typeof ArcOfEllipseRules>;
export const ArcOfEllipseRules = z.object({
  id: oid,
  type: z.literal("arc_of_ellipse_rules"),
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type CurveValue = z.infer<typeof CurveValue>;
export const CurveValue = z.object({
  id: oid,
  type: z.literal("curve_value"),
  p_id: oid,
  a_id: oid,
  u: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type ArcOfHyperbolaRules = z.infer<typeof ArcOfHyperbolaRules>;
export const ArcOfHyperbolaRules = z.object({
  id: oid,
  type: z.literal("arc_of_hyperbola_rules"),
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type ArcOfParabolaRules = z.infer<typeof ArcOfParabolaRules>;
export const ArcOfParabolaRules = z.object({
  id: oid,
  type: z.literal("arc_of_parabola_rules"),
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PointOnArc = z.infer<typeof PointOnArc>;
export const PointOnArc = z.object({
  id: oid,
  type: z.literal("point_on_arc"),
  p_id: oid,
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PerpendicularLine2Arc = z.infer<typeof PerpendicularLine2Arc>;
export const PerpendicularLine2Arc = z.object({
  id: oid,
  type: z.literal("perpendicular_line2arc"),
  p1_id: oid,
  p2_id: oid,
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PerpendicularArc2Line = z.infer<typeof PerpendicularArc2Line>;
export const PerpendicularArc2Line = z.object({
  id: oid,
  type: z.literal("perpendicular_arc2line"),
  a_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PerpendicularCircle2Arc = z.infer<typeof PerpendicularCircle2Arc>;
export const PerpendicularCircle2Arc = z.object({
  id: oid,
  type: z.literal("perpendicular_circle2arc"),
  center_id: oid,
  radius: z.union([ObjectParam, z.number(), z.string()]),
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PerpendicularArc2Circle = z.infer<typeof PerpendicularArc2Circle>;
export const PerpendicularArc2Circle = z.object({
  id: oid,
  type: z.literal("perpendicular_arc2circle"),
  a_id: oid,
  center_id: oid,
  radius: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type PerpendicularArc2Arc = z.infer<typeof PerpendicularArc2Arc>;
export const PerpendicularArc2Arc = z.object({
  id: oid,
  type: z.literal("perpendicular_arc2arc"),
  a1_id: oid,
  reverse1: z.boolean(),
  a2_id: oid,
  reverse2: z.boolean(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Tangent_LC = z.infer<typeof Tangent_LC>;
export const Tangent_LC = z.object({
  id: oid,
  type: z.literal("tangent_lc"),
  l_id: oid,
  c_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Tangent_LE = z.infer<typeof Tangent_LE>;
export const Tangent_LE = z.object({
  id: oid,
  type: z.literal("tangent_le"),
  l_id: oid,
  e_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Tangent_LA = z.infer<typeof Tangent_LA>;
export const Tangent_LA = z.object({
  id: oid,
  type: z.literal("tangent_la"),
  l_id: oid,
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Tangent_CC = z.infer<typeof Tangent_CC>;
export const Tangent_CC = z.object({
  id: oid,
  type: z.literal("tangent_cc"),
  c1_id: oid,
  c2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Tangent_AA = z.infer<typeof Tangent_AA>;
export const Tangent_AA = z.object({
  id: oid,
  type: z.literal("tangent_aa"),
  a1_id: oid,
  a2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Tangent_CA = z.infer<typeof Tangent_CA>;
export const Tangent_CA = z.object({
  id: oid,
  type: z.literal("tangent_ca"),
  c_id: oid,
  a_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type CircleRadius = z.infer<typeof CircleRadius>;
export const CircleRadius = z.object({
  id: oid,
  type: z.literal("circle_radius"),
  c_id: oid,
  radius: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type ArcRadius = z.infer<typeof ArcRadius>;
export const ArcRadius = z.object({
  id: oid,
  type: z.literal("arc_radius"),
  a_id: oid,
  radius: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type CircleDiameter = z.infer<typeof CircleDiameter>;
export const CircleDiameter = z.object({
  id: oid,
  type: z.literal("circle_diameter"),
  c_id: oid,
  diameter: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type ArcDiameter = z.infer<typeof ArcDiameter>;
export const ArcDiameter = z.object({
  id: oid,
  type: z.literal("arc_diameter"),
  a_id: oid,
  diameter: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualLength = z.infer<typeof EqualLength>;
export const EqualLength = z.object({
  id: oid,
  type: z.literal("equal_length"),
  l1_id: oid,
  l2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualRadius_CC = z.infer<typeof EqualRadius_CC>;
export const EqualRadius_CC = z.object({
  id: oid,
  type: z.literal("equal_radius_cc"),
  c1_id: oid,
  c2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualRadii_EE = z.infer<typeof EqualRadii_EE>;
export const EqualRadii_EE = z.object({
  id: oid,
  type: z.literal("equal_radii_ee"),
  e1_id: oid,
  e2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualRadii_AHAH = z.infer<typeof EqualRadii_AHAH>;
export const EqualRadii_AHAH = z.object({
  id: oid,
  type: z.literal("equal_radii_ahah"),
  a1_id: oid,
  a2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualRadius_CA = z.infer<typeof EqualRadius_CA>;
export const EqualRadius_CA = z.object({
  id: oid,
  type: z.literal("equal_radius_ca"),
  c1_id: oid,
  a2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualRadius_AA = z.infer<typeof EqualRadius_AA>;
export const EqualRadius_AA = z.object({
  id: oid,
  type: z.literal("equal_radius_aa"),
  a1_id: oid,
  a2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type EqualFocus = z.infer<typeof EqualFocus>;
export const EqualFocus = z.object({
  id: oid,
  type: z.literal("equal_focus"),
  a1_id: oid,
  a2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2PSymmetric_PPL = z.infer<typeof P2PSymmetric_PPL>;
export const P2PSymmetric_PPL = z.object({
  id: oid,
  type: z.literal("p2p_symmetric_ppl"),
  p1_id: oid,
  p2_id: oid,
  l_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type P2PSymmetric_PPP = z.infer<typeof P2PSymmetric_PPP>;
export const P2PSymmetric_PPP = z.object({
  id: oid,
  type: z.literal("p2p_symmetric_ppp"),
  p1_id: oid,
  p2_id: oid,
  p_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type SnellsLaw = z.infer<typeof SnellsLaw>;
export const SnellsLaw = z.object({
  id: oid,
  type: z.literal("snells_law"),
  ray1_id: oid,
  ray2_id: oid,
  boundary_id: oid,
  p_id: oid,
  n1: z.union([ObjectParam, z.number(), z.string()]),
  n2: z.union([ObjectParam, z.number(), z.string()]),
  flipn1: z.boolean(),
  flipn2: z.boolean(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type C2CDistance = z.infer<typeof C2CDistance>;
export const C2CDistance = z.object({
  id: oid,
  type: z.literal("c2cdistance"),
  c1_id: oid,
  c2_id: oid,
  dist: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type C2LDistance = z.infer<typeof C2LDistance>;
export const C2LDistance = z.object({
  id: oid,
  type: z.literal("c2ldistance"),
  c_id: oid,
  l_id: oid,
  dist: z.union([ObjectParam, z.number(), z.string()]),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentPoint2Ellipse = z.infer<
  typeof InternalAlignmentPoint2Ellipse
>;
export const InternalAlignmentPoint2Ellipse = z.object({
  id: oid,
  type: z.literal("internal_alignment_point2ellipse"),
  e_id: oid,
  p1_id: oid,
  alignmentType: InternalAlignmentType,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentEllipseMajorDiameter = z.infer<
  typeof InternalAlignmentEllipseMajorDiameter
>;
export const InternalAlignmentEllipseMajorDiameter = z.object({
  id: oid,
  type: z.literal("internal_alignment_ellipse_major_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentEllipseMinorDiameter = z.infer<
  typeof InternalAlignmentEllipseMinorDiameter
>;
export const InternalAlignmentEllipseMinorDiameter = z.object({
  id: oid,
  type: z.literal("internal_alignment_ellipse_minor_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentEllipseFocus1 = z.infer<
  typeof InternalAlignmentEllipseFocus1
>;
export const InternalAlignmentEllipseFocus1 = z.object({
  id: oid,
  type: z.literal("internal_alignment_ellipse_focus1"),
  e_id: oid,
  p1_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentEllipseFocus2 = z.infer<
  typeof InternalAlignmentEllipseFocus2
>;
export const InternalAlignmentEllipseFocus2 = z.object({
  id: oid,
  type: z.literal("internal_alignment_ellipse_focus2"),
  e_id: oid,
  p1_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentPoint2Hyperbola = z.infer<
  typeof InternalAlignmentPoint2Hyperbola
>;
export const InternalAlignmentPoint2Hyperbola = z.object({
  id: oid,
  type: z.literal("internal_alignment_point2hyperbola"),
  e_id: oid,
  p1_id: oid,
  alignmentType: InternalAlignmentType,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentHyperbolaMajorDiameter = z.infer<
  typeof InternalAlignmentHyperbolaMajorDiameter
>;
export const InternalAlignmentHyperbolaMajorDiameter = z.object({
  id: oid,
  type: z.literal("internal_alignment_hyperbola_major_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentHyperbolaMinorDiameter = z.infer<
  typeof InternalAlignmentHyperbolaMinorDiameter
>;
export const InternalAlignmentHyperbolaMinorDiameter = z.object({
  id: oid,
  type: z.literal("internal_alignment_hyperbola_minor_diameter"),
  e_id: oid,
  p1_id: oid,
  p2_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentHyperbolaFocus = z.infer<
  typeof InternalAlignmentHyperbolaFocus
>;
export const InternalAlignmentHyperbolaFocus = z.object({
  id: oid,
  type: z.literal("internal_alignment_hyperbola_focus"),
  e_id: oid,
  p1_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentParabolaFocus = z.infer<
  typeof InternalAlignmentParabolaFocus
>;
export const InternalAlignmentParabolaFocus = z.object({
  id: oid,
  type: z.literal("internal_alignment_parabola_focus"),
  e_id: oid,
  p1_id: oid,
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentBSplineControlPoint = z.infer<
  typeof InternalAlignmentBSplineControlPoint
>;
export const InternalAlignmentBSplineControlPoint = z.object({
  id: oid,
  type: z.literal("internal_alignment_bspline_control_point"),
  b_id: oid,
  c_id: oid,
  poleindex: z.number(),
  tag: z.number().optional(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type InternalAlignmentKnotPoint = z.infer<
  typeof InternalAlignmentKnotPoint
>;
export const InternalAlignmentKnotPoint = z.object({
  id: oid,
  type: z.literal("internal_alignment_knot_point"),
  b_id: oid,
  p_id: oid,
  knotindex: z.number(),
  driving: z.boolean().optional(),
  temporary: z.boolean().optional(),
  scale: z.number().optional(),
});

export type Constraint = z.infer<typeof Constraint>;
export const Constraint = z.union([
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

export type ConstraintParamType = z.infer<typeof ConstraintParamType>;
export const ConstraintParamType = z.union([
  z.union([
    oid,
    z.literal("equal"),
    z.union([ObjectParam, z.number(), z.string()]),
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    Constraint_Alignment,
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("proportional"),
    z.union([ObjectParam, z.number(), z.string()]),
    z.union([ObjectParam, z.number(), z.string()]),
    z.number(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("difference"),
    z.union([ObjectParam, z.number(), z.string()]),
    z.union([ObjectParam, z.number(), z.string()]),
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2p_distance"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2p_angle_incr_angle"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.number(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2p_angle"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2l_distance"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_line_pl"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_line_ppp"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_perp_bisector_pl"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_perp_bisector_ppp"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("parallel"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_ll"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_pppp"),
    oid,
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("l2l_angle_ll"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("l2l_angle_pppp"),
    oid,
    oid,
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("angle_via_point"),
    oid,
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("midpoint_on_line_ll"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("midpoint_on_line_pppp"),
    oid,
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_circumf"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_at_bspline_knot"),
    oid,
    oid,
    z.number(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2p_coincident"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("horizontal_l"),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("horizontal_pp"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("vertical_l"),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("vertical_pp"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("coordinate_x"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("coordinate_y"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("arc_rules"),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_circle"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_ellipse"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_hyperbolic_arc"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_parabolic_arc"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_bspline"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("arc_of_ellipse_rules"),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("curve_value"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("arc_of_hyperbola_rules"),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("arc_of_parabola_rules"),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("point_on_arc"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_line2arc"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_arc2line"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_circle2arc"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_arc2circle"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("perpendicular_arc2arc"),
    oid,
    z.boolean(),
    oid,
    z.boolean(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_lc"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_le"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_la"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_cc"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_aa"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("tangent_ca"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("circle_radius"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("arc_radius"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("circle_diameter"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("arc_diameter"),
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_length"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_radius_cc"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_radii_ee"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_radii_ahah"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_radius_ca"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_radius_aa"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("equal_focus"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2p_symmetric_ppl"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("p2p_symmetric_ppp"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("snells_law"),
    oid,
    oid,
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("c2cdistance"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("c2ldistance"),
    oid,
    oid,
    z.union([ObjectParam, z.number(), z.string()]),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_point2ellipse"),
    oid,
    oid,
    InternalAlignmentType,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_ellipse_major_diameter"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_ellipse_minor_diameter"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_ellipse_focus1"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_ellipse_focus2"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_point2hyperbola"),
    oid,
    oid,
    InternalAlignmentType,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_hyperbola_major_diameter"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_hyperbola_minor_diameter"),
    oid,
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_hyperbola_focus"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_parabola_focus"),
    oid,
    oid,
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_bspline_control_point"),
    oid,
    oid,
    z.number(),
    z.number(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
  z.union([
    oid,
    z.literal("internal_alignment_knot_point"),
    oid,
    oid,
    z.number(),
    z.boolean(),
    z.boolean(),
    z.number(),
  ]),
]);

export type IArc = z.infer<typeof IArc>;
export const IArc = z.object({
  start_id: oid,
  end_id: oid,
  start_angle: z.number(),
  end_angle: z.number(),
});

export type SketchPoint = z.infer<typeof SketchPoint>;
export const SketchPoint = z.object({
  id: oid,
  type: z.literal("point"),
  x: z.number(),
  y: z.number(),
  fixed: z.boolean(),
});

export type SketchLine = z.infer<typeof SketchLine>;
export const SketchLine = z.object({
  id: oid,
  type: z.literal("line"),
  p1_id: oid,
  p2_id: oid,
});

export type SketchCircle = z.infer<typeof SketchCircle>;
export const SketchCircle = z.object({
  id: oid,
  type: z.literal("circle"),
  c_id: oid,
  radius: z.number(),
});

export type SketchArc = z.infer<typeof SketchArc>;
export const SketchArc = z.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: z.number(),
  end_angle: z.number(),
  type: z.literal("arc"),
  c_id: oid,
  radius: z.number(),
});

export type SketchEllipse = z.infer<typeof SketchEllipse>;
export const SketchEllipse = z.object({
  id: oid,
  type: z.literal("ellipse"),
  c_id: oid,
  focus1_id: oid,
  radmin: z.number(),
});

export type SketchArcOfEllipse = z.infer<typeof SketchArcOfEllipse>;
export const SketchArcOfEllipse = z.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: z.number(),
  end_angle: z.number(),
  type: z.literal("arc_of_ellipse"),
  c_id: oid,
  focus1_id: oid,
  radmin: z.number(),
});

export type SketchParabola = z.infer<typeof SketchParabola>;
export const SketchParabola = z.object({
  id: oid,
  type: z.literal("parabola"),
  vertex_id: oid,
  focus1_id: oid,
});

export type SketchArcOfParabola = z.infer<typeof SketchArcOfParabola>;
export const SketchArcOfParabola = z.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: z.number(),
  end_angle: z.number(),
  type: z.literal("arc_of_parabola"),
  vertex_id: oid,
  focus1_id: oid,
});

export type SketchHyperbola = z.infer<typeof SketchHyperbola>;
export const SketchHyperbola = z.object({
  id: oid,
  type: z.literal("hyperbola"),
  c_id: oid,
  focus1_id: oid,
  radmin: z.number(),
});

export type SketchArcOfHyperbola = z.infer<typeof SketchArcOfHyperbola>;
export const SketchArcOfHyperbola = z.object({
  id: oid,
  start_id: oid,
  end_id: oid,
  start_angle: z.number(),
  end_angle: z.number(),
  type: z.literal("arc_of_hyperbola"),
  c_id: oid,
  focus1_id: oid,
  radmin: z.number(),
});

export type SketchGeometry = z.infer<typeof SketchGeometry>;
export const SketchGeometry = z.union([
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

export type SketchPrimitive = z.infer<typeof SketchPrimitive>;
export const SketchPrimitive = z.union([SketchGeometry, Constraint]);

export type SketchParam = z.infer<typeof SketchParam>;
export const SketchParam = z.object({
  type: z.literal("param"),
  name: z.string(),
  value: z.number(),
});
